// Import the framework and instantiate it
import Fastify from 'fastify'
import path from 'path';
import { fileURLToPath } from 'url';
import fastifyStatic from '@fastify/static';
import cors from '@fastify/cors'

const fastify = Fastify({
  logger: true
})

await fastify.register(cors, { 
    // put your options here
})

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Путь к директории со статическим контентом
const staticContentPath = path.join(__dirname, 'static');

// Регистрация плагина fastify-static для обслуживания статического контента
fastify.register(fastifyStatic, {
  root: staticContentPath,
  prefix: '/static/', // опционально: префикс URL для статических файлов
});

import { JsonDB, Config } from 'node-json-db';
var db = new JsonDB(new Config("queueDatabase", true, true, '/'));

console.log("Running SmartQueue, created by Aram Virabyan...")

// Declare a route
fastify.get('/queue/set', async function handler (request, reply) {
    await db.push("/settings", {
        currentIndexation: Number(request.query.newIndex) || 0
    });
    return { currentIndexation: Number(request.query.newIndex) || 0 }
})

// Declare a route
fastify.get('/queue/get', async function handler (request, reply) {
    var data = await db.getData("/queueElements");
    return { data: data }
})

// Объявляем маршрут
fastify.get('/queue/add', async function handler (request, reply) {
    var settingsField = await db.getData("/settings");
    var freeWorkers = [];
    try {
        // Пытаемся получить список свободных работников
        freeWorkers = await db.getData("/freeWorkers");
    } catch (error) {
        // Если не удается получить, оставляем список пустым
    }

    let assignedWorker = null;
    // Если есть свободные работники, назначаем первого из списка
    if (freeWorkers.length > 0) {
        assignedWorker = freeWorkers.shift(); // Удаляем назначенного работника из списка свободных
        await db.push("/freeWorkers", freeWorkers, true); // Обновляем список свободных работников в базе данных
    }

    // Добавляем элемент в очередь с назначенным работником или без
    await db.push("/queueElements/" + Number(settingsField.currentIndexation), {
        assignedWorker: assignedWorker,
        serviceState: assignedWorker ? "Calling" : "Queued", // Если работник назначен, статус - "Calling"
        timestamp: new Date().getTime()
    }, true);

    // Обновляем индексацию
    await db.push("/settings", {
        currentIndexation: settingsField.currentIndexation + 1
    });

    return { added: settingsField.currentIndexation, assignedWorker: assignedWorker }
})

fastify.get('/queue/catch', async function handler (request, reply) {
    // Получаем все элементы из /queueElements
    var queueElements = await db.getData("/queueElements");
    // Фильтруем элементы, где assignedWorker не задан
    var unassignedElements = Object.entries(queueElements)
        .filter(([key, value]) => !value.assignedWorker)
        .map(([key, value]) => ({ key: Number(key), ...value }));
    // Сортируем элементы по ключу
    unassignedElements.sort((a, b) => a.key - b.key);

    if (unassignedElements.length > 0) {
        // Берем элемент с наименьшим номером
        var elementToAssign = unassignedElements[0];
        // Обновляем элемент: устанавливаем assignedWorker, serviceState и timestamp
        await db.push(`/queueElements/${elementToAssign.key}`, {
            ...elementToAssign,
            assignedWorker: request.query.workerId,
            serviceState: "Calling",
            timestamp: new Date().getTime()
        });
        return { status: "Assigned", key: elementToAssign.key };
    } else {
        // Если нет неназначенных элементов, добавляем workerId в /freeWorkers
        try {
            var freeWorkers = await db.getData("/freeWorkers");
            // Проверяем, существует ли уже workerId в списке
            if (!freeWorkers.includes(request.query.workerId)) {
                freeWorkers.push(request.query.workerId);
                await db.push("/freeWorkers", freeWorkers, true);
            }
        } catch (error) {
            // Если /freeWorkers не существует, создаем его с текущим workerId
            await db.push("/freeWorkers", [request.query.workerId], true);
        }
        return { status: "AddedToFreeWorkers", workerId: request.query.workerId };
    }
})

// Run the server!
try {
  await fastify.listen({ port: 3000 })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}