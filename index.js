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

// Предполагается, что db - это экземпляр вашей базы данных, поддерживающий асинхронные операции
async function updateSettings() {
    // Попытка получить текущие настройки
    try {
        const settings = await db.getData("/settings");
    } catch {
        // Если "/settings" не существует, создаем его с currentIndexation равным 0
        await db.push("/settings", {
            currentIndexation: 0,
            masterPassword: "abkk67"
        });
    }
}

// Вызов функции для обновления настроек
updateSettings();

await db.push(`/queueElements/-1`, {
    assignedWorker: -1,
    serviceState: "Termninated",
    timestamp: new Date().getTime(),
    called: false
});

// Declare a route
fastify.get('/queue/set', async function handler(request, reply) {

})

// Declare a route
fastify.get('/queue/admin', async function handler(request, reply) {
    var settingsField = await db.getData("/settings");
    if (settingsField.masterPassword != request.query.password) {
        return { status: "WRONG MASTER PASSWORD!" }
    } else {
        switch (request.query.action) {
            case "resetQueueElements":
                // Устанавливаем пустой объект для /queueElements, удаляя все элементы
                await db.push("/queueElements", {}, true);
                break;
            case "cancelAll":
                // Получаем все элементы из /queueElements
                var queueElements = await db.getData("/queueElements");
                // Итерируем по всем элементам, ищем те, что имеют статус "Calling" или "InProgress"
                for (const [key, value] of Object.entries(queueElements)) {
                    if (value.serviceState === "Calling" || value.serviceState === "InProgress") {
                        // Меняем статус на "Terminated"
                        await db.push(`/queueElements/${key}`, {
                            ...value,
                            serviceState: "Terminated"
                        });
                    }
                }
                break;
            case "updateIndex":
                await db.push("/settings", {
                    currentIndexation: Number(request.query.newIndexInput) || 0,
                    masterPassword: settingsField.masterPassword
                });
                break;

            default:
                break;
        }
        return { status: "Okay." }
    }

})

fastify.get('/queue/get', async function handler(request, reply) {
    var data = await db.getData("/queueElements");
    return { data: data }
})

// Объявляем маршрут
fastify.get('/queue/add', async function handler(request, reply) {
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
        timestamp: new Date().getTime(),
        called: false
    }, true);

    // Обновляем индексацию
    await db.push("/settings", {
        currentIndexation: settingsField.currentIndexation + 1
    });

    return { status: "okay", added: settingsField.currentIndexation, assignedWorker: assignedWorker }
})

fastify.get('/queue/catch', async function handler(request, reply) {
    // Получаем все элементы из /queueElements
    var queueElements = await db.getData("/queueElements");
    // Проверяем, назначен ли уже workerId какому-либо элементу
    var alreadyAssignedElement = Object.entries(queueElements)
        .find(([key, value]) => value.serviceState != "Terminated" && value.serviceState != "Finished" && value.serviceState != "CanceledByWorker" && value.assignedWorker === request.query.workerId);

    if (alreadyAssignedElement) {
        // Если worker уже назначен, возвращаем этот элемент
        return { status: "Assigned(1)", key: Number(alreadyAssignedElement[0]) };
    } else {
        // Фильтруем элементы, где assignedWorker не задан и статус не InProgress
        var unassignedElements = Object.entries(queueElements)
            .filter(([key, value]) => !value.assignedWorker && value.serviceState !== "InProgress")
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
                timestamp: new Date().getTime(),
            });
            return { status: "Assigned(2)", key: elementToAssign.key };
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
            return { status: "AddedToFreeWorkers(3)", workerId: request.query.workerId };
        }
    }
})

fastify.get('/queue/acceptArbitrary', async function handler(request, reply) {
    const now = new Date();
    const hour = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    // Создаем ID посетителя из второго символа часа + минуты + первый символ часа
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < 2; i++) {
        const randomIndex = Math.floor(Math.random() * alphabet.length);
        result += alphabet[randomIndex];
    }
    const visitorId = `${hour[1]}${minutes}${hour[0]}${result}`;

    var settingsField = await db.getData("/settings");

    // Добавляем произвольного посетителя в очередь
    await db.push("/queueElements/" + visitorId, {
        assignedVolunteer: request.query.id, // Назначаем волонтера из параметра запроса
        serviceState: "InProgress", // Устанавливаем статус "InProgress"
        timestamp: new Date().getTime(),
        called: true
    }, true);

    return { visitorId: visitorId, assignedVolunteer: request.query.id, status: "InProgress" }
})

// Объявляем новый маршрут для обновления статуса элемента в очереди
fastify.get('/queue/updateStatus', async function handler(request, reply) {
    const { newStatus, id } = request.query;

    // Проверяем, что newStatus соответствует одному из допустимых значений
    if (!["CanceledByWorker", "InProgress", "Finished"].includes(newStatus)) {
        return { error: "Invalid status" };
    }

    // Пытаемся получить элемент очереди по id
    try {
        var elementToUpdate = await db.getData(`/queueElements/${id}`);

        // Обновляем статус элемента
        elementToUpdate.serviceState = newStatus;

        // Сохраняем обновленный элемент в базе данных
        await db.push(`/queueElements/${id}`, elementToUpdate, true);

        return { status: "Updated", id: id, newStatus: newStatus };
    } catch (error) {
        // Если элемент не найден или произошла другая ошибка
        return { error: "Element not found or update failed", details: error.message };
    }
})

// Объявляем новый маршрут для обновления статуса элемента в очереди
fastify.get('/queue/callAgain', async function handler(request, reply) {
    const { id } = request.query;

    // Пытаемся получить элемент очереди по id
    try {
        var elementToUpdate = await db.getData(`/queueElements/${id}`);

        // Обновляем статус элемента
        elementToUpdate.called = false;

        // Сохраняем обновленный элемент в базе данных
        await db.push(`/queueElements/${id}`, elementToUpdate, true);

        return { status: "Updated", id: id, called: false };
    } catch (error) {
        // Если элемент не найден или произошла другая ошибка
        return { error: "Element not found or call again failed", details: error.message };
    }
})

// Объявляем новый маршрут для обновления статуса элемента в очереди
fastify.get('/queue/called', async function handler(request, reply) {
    const { id } = request.query;

    // Пытаемся получить элемент очереди по id
    try {
        var elementToUpdate = await db.getData(`/queueElements/${id}`);

        // Обновляем статус элемента
        elementToUpdate.called = true;

        // Сохраняем обновленный элемент в базе данных
        await db.push(`/queueElements/${id}`, elementToUpdate, true);

        return { status: "Updated", id: id, called: true };
    } catch (error) {
        // Если элемент не найден или произошла другая ошибка
        return { error: "Element not found or call again failed", details: error.message };
    }
})

// Run the server!
try {
    await fastify.listen({ port: 3165 })
} catch (err) {
    fastify.log.error(err)
    process.exit(1)
}