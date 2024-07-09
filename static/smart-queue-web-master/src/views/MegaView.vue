<template>
  <ion-page>

    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-menu-button color="primary"></ion-menu-button>
      </ion-buttons>
      <ion-title>{{ $route.params.id }}</ion-title>
    </ion-toolbar>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">{{ $route.params.id }}</ion-title>
        </ion-toolbar>
      </ion-header>

      <div>

        <table class="data">
          <tr>
            <th>Посетитель</th>
            <th>Оператор</th>
            <th>Аудитория</th>
          </tr>

          <tr v-for="item in queueData" :class="{ 'highlighted': item.status === 'Calling' }"
            style="text-align: center;">
            <td :class="{ 'highlighted': item.status === 'Calling' }">{{ item.id }}</td>
            <td :class="{ 'highlighted': item.status === 'Calling' }"> {{ item.worker }}</td>
            <td :class="{ 'highlighted': item.status === 'Calling' }">{{ workerBinding[item.worker] }}</td>
          </tr>
        </table>
      </div>

      <div v-if="queueData.length < 1" id="container">
        <strong class="capitalize">Очередь пуста</strong>
        <p>Сейчас в очереди никого нет</p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonButtons, IonSelect,
  IonSelectOption, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar
} from '@ionic/vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  components: {
    IonButtons, IonSelect,
    IonSelectOption, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar
  },
  data() {
    return {
      isFullscreen: false,
      workerBinding: {
        1: "333",
        2: "3332",
        3: "3333",
        4: "3334",
        5: "3335",
        6: "3336"
      },
      queueData: [{
        id: 1,
        worker: 5,
        room: "365A"
      }]
    }
  },
  mounted() {
    // eslint-disable-next-line
    const parent_this = this;

    setInterval(() => {
      this.$axios.get(localStorage.getItem("APIServer_InstanceAddress") + '/queue/get', {
        params: {
          id: this.workspaceSetting_WorkerID // Replace YOUR_APP_URL_HERE with your actual app URL
        }
      })
        .then((response: AxiosResponse) => {
          console.log(response.data.data)
          var queueData = []
          Object.entries(response.data.data).forEach(([key, value]) => {
            const newData = {
              id: parseInt(key) + 1, // Преобразование ключа в число и корректировка id, если необходимо
              worker: parseInt(value.assignedWorker), // Преобразование assignedWorker в число
              room: "", // Установка значения room в пустую строку или другое стандартное значение,
              status: value.serviceState
            };
            if (value.serviceState == "Calling" || value.serviceState == "Queued") {
              queueData.push(newData);
            }
          });

          queueData.sort((a, b) => {
            // Если оба элемента имеют статус "Calling", сортируем по id
            if (a.status === "Calling" && b.status === "Calling") {
              return a.id - b.id;
            }
            // Элементы со статусом "Calling" перемещаем в начало массива
            if (a.status === "Calling") return -1;
            if (b.status === "Calling") return 1;
            // Все остальные элементы сортируем по id
            return a.id - b.id;
          });

          console.log(queueData);
          this.queueData = queueData;
        })
        .catch((error: any) => {
          // Handle error
          console.error(error); // Log or process the error
        });
    }, 2500);

    setInterval(() => {
      this.check();
    }, 3000);
  },
  methods: {
    //
    check() {
      if (!window.screenTop && !window.screenY) {
        if (!this.isFullscreen) {
          //nothing
        } else {
          document.querySelectorAll('ion-menu').forEach(function (element) {
            element.style.display = 'flex';
          });
          document.querySelectorAll('ion-toolbar').forEach(function (element) {
            element.style.display = 'block';
          });
        }
      } else {
        if (this.isFullscreen) {
          //nothing
        } else {
          document.querySelectorAll('ion-menu').forEach(function (element) {
            element.style.display = 'none';
          });
          document.querySelectorAll('ion-toolbar').forEach(function (element) {
            element.style.display = 'none';
          });

        }
      }
    }
  }
});

</script>

<style scoped>
@keyframes lightning {
  0% {
    background-color: transparent;
  }

  50% {
    background-color: yellow;
  }

  100% {
    background-color: transparent;
  }
}

.highlighted {
  animation: lightning 1s infinite;
}

table {
  width: 80%;
  margin-left: 5%;
  margin-right: 1%;
  border-collapse: collapse;
  border-radius: 15px;
  overflow: hidden;
  border-collapse: collapse;
  border-radius: 15px;
  overflow: hidden;
}

th,
td {
  padding: 1em;
  background: #ddd;
  /* Удалите !important, если он здесь был */
  border-bottom: 2px solid white;
}

.css-mine {
  margin-top: 2em;
  clear: both;
}

body {
  margin: 1.5em;
}

#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
