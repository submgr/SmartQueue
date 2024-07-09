<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>{{ $route.params.id }}</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">{{ $route.params.id }}</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container" v-if="stage == 'workspaceSelection'">
        <strong class="capitalize">Выбор оператора</strong>
        <p>Выберите оператора, за которого вы работаете</p>
        <div style="width: 400px; max-width: 90vw; margin: auto;
  width: 50%;">
          <ion-item style="margin-top: 5vh;">
            <ion-select label="Оператор" placeholder="Выберите" v-model="workplaceIdInput"  @ionChange="workplaceSelectorNewValue">
              <ion-select-option v-for="index in 100" :key="index" :value="index"> {{ index }}</ion-select-option>
            </ion-select>
          </ion-item>
          <ion-button style="margin-top: 5vh;" @click="selectWorkplace">Продолжить</ion-button>
        </div>

      </div>
      <div v-if="stage == 'workspaceDesk'" style="margin-left: 5vw;">
        <div style="background: #00000010; border-radius: 20px; height: auto; padding: 10px; width: 180px; margin-left: 5px; margin-bottom: 10vh;">
          <strong class="capitalize" style="padding-bottom: 15px;">Рабочее место {{ workspaceSetting_WorkerID }}</strong>
        </div>
        <ion-grid>
          <ion-row>
            <ion-col size="6">
              <strong class="capitalize">Следующий посетитель</strong>
              <p>Уже готовы к следующему посетителю?</p>
              <ion-button @click="catchNewRequest" style="margin-top: 2vh; margin-left: -4px;">Позвать следующего посетителя</ion-button>
            </ion-col>
            <ion-col size="6">
              <strong class="capitalize">Принять вне очереди</strong>
              <p>Принимаете посетителя вне очереди?</p>
              <ion-button style="margin-top: 2vh; margin-left: -4px;">Принять вне очереди</ion-button>
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonButtons, IonSelect,
  IonSelectOption, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
    components: { IonButtons, IonSelect,
      IonSelectOption, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar },
    data() {
        return {
            stage: "workspaceSelection",
            workplaceIdInput: -1
        }
    },
    mounted() {
        // eslint-disable-next-line
        const parent_this = this;

        if(localStorage.getItem("workspaceSetting_WorkerID") && Number(localStorage.getItem("workspaceSetting_WorkerID")) > -1){
          this.stage = "workspaceDesk"
          this.workspaceSetting_WorkerID = Number(localStorage.getItem("workspaceSetting_WorkerID"))
        }
    },
    methods: {
        selectWorkplace(){
          if(Number(this.workplaceIdInput) > -1){
            var id = Number(this.workplaceIdInput);
            this.workspaceSetting_WorkerID = id;
            localStorage.setItem("workspaceSetting_WorkerID", id + "")
          }else{
            console.log("Please, select correct value for the workplace's ID.", Number(this.workplaceIdInput))
          }
          
        },
        workplaceSelectorNewValue(event){
          this.workspaceSetting_WorkerID = Number(event.detail.value);
        },
        catchNewRequest(){
          this.$axios.get(localStorage.getItem("APIServer_InstanceAddress") + '/queue/catch', {
            params: {
              id: this.workspaceSetting_WorkerID // Replace YOUR_APP_URL_HERE with your actual app URL
            }
          })
            .then((response: AxiosResponse) => {
              if(response.data.status == "AddedToFreeWorkers")
            })
            .catch((error: any) => {
              // Handle error
              console.error(error); // Log or process the error
            });
        }
    }
});

</script>

<style scoped>
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
