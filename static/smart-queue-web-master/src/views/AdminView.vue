<template>
    <ion-page>
        <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>{{ $route.params.id }}</ion-title>
      </ion-toolbar>
        <ion-content :fullscreen="true" class="ion-padding">
            <div style="display: flex; justify-content: center; align-items: center; height: 100%;">
                <ion-grid>
                    <ion-row>
                        <ion-col size="12">
                            <p>Для представленных ниже действий требуется мастер пароль.</p>
                            <ion-item>
                                <ion-label position="floating">Пароль</ion-label>
                                <ion-input v-model="passwordInput" :value="passwordInput" type="password"></ion-input>
                            </ion-item>
                        </ion-col>
                    </ion-row>
                    <ion-row style="margin-top: 5vh;">
                        <ion-col size="6">
                            <div>
                                <strong>Сброс индекса</strong>
                                <p>Это действие обнулит индекс последнего номерка (используйте, чтобы начать отсчет с
                                    определенного номера)</p>
                                <ion-item>
                                    <ion-input v-model="newIndexInput" :value="newIndexInput" type="number"
                                        placeholder="Новое целое значение"></ion-input>
                                </ion-item>
                                <ion-button @click="adminAction('updateIndex');" expand="block">Обновить</ion-button>
                            </div>
                        </ion-col>
                        <ion-col size="6">
                            <div>
                                <strong>Отклонение всех номеров</strong>
                                <p>Уже существующие номера в очереди будут помечены как отклоненные</p>
                                <ion-item>
                                    <ion-input type="number" placeholder="Новое целое значение"></ion-input>
                                </ion-item>
                                <ion-button @click="adminAction('cancelAll');" expand="block">Отклонить все</ion-button>
                            </div>
                        </ion-col>

                    </ion-row>
                    <ion-row style="margin-top: 5vh;">
                        <ion-col size="6">
                            <div>
                                <strong>Сброс элементов очереди</strong>
                                <p>Полное удаление номеров из очереди (это будет значит, что в очереди никого не будет)
                                </p>
                                <ion-button @click="adminAction('resetQueueElements');"
                                    expand="block">Сбросить</ion-button>
                            </div>
                        </ion-col>

                    </ion-row>
                </ion-grid>
            </div>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage, IonGrid, IonRow, IonCol, IonItem, IonLabel, IonInput, IonButton } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
    components: {
        IonContent, IonPage, IonGrid, IonRow, IonCol, IonItem, IonLabel, IonInput, IonButton
    },
    setup() {
        // Setup logic here
    },
    data() {
        return {
            passwordInput: "",
            newIndexInput: ""
        }
    },
    methods: {
        //
        adminAction(action){
            if (this.passwordInput == "") {
                //
                alert(this.passwordInput)
            } else {
                this.$axios.get(localStorage.getItem("APIServer_InstanceAddress") + '/queue/admin', {
                    params: {
                        action: action,
                        password: this.passwordInput,
                        newIndexInput: this.newIndexInput
                    }
                })
                    .then((response: any) => {
                        console.log(response.data)
                        alert(JSON.stringify(response.data))

                    })
                    .catch((error: any) => {
                        // Handle error
                        console.error(error); // Log or process the error
                        alert(JSON.stringify(error))
                    });
            }
        }
    }
});
</script>

<style scoped>
/* Стили, если необходимы, добавьте здесь */
</style>