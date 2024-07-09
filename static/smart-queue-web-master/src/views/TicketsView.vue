<template>
    <ion-page>
        <ion-toolbar>
            <ion-buttons slot="start">
                <ion-menu-button color="primary"></ion-menu-button>
            </ion-buttons>
            <ion-title>{{ $route.params.id }}</ion-title>
        </ion-toolbar>
        <ion-content class="ion-text-center">
            <ion-button v-if="locked === false" @click="newTicket()"
                style="height: 100px; width: 500px; margin-top: 15vh; font-size: 40px;">Новый билет</ion-button>
            <ion-button v-if="locked === true"
                style="height: 100px; width: 500px; margin-top: 15vh; font-size: 40px;">Подождите...</ion-button>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage, IonButton, toastController } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
    components: {
        IonContent, IonPage, IonButton, toastController
    },
    data() {
        return {
            locked: false
        }
    },
    methods: {
        async newTicket() {
            // eslint-disable-next-line
            const parent_this = this;

            this.locked = true;
            this.$axios.get(localStorage.getItem("APIServer_InstanceAddress") + '/queue/add', {
                params: {
                }
            })
                .then((response: AxiosResponse) => {
                    this.locked = false;
                    if (response.data.status == "okay") {
                        parent_this.registered(response.data.added);
                    }

                })
                .catch((error: any) => {
                    this.locked = false;
                    // Handle error
                    console.error(error); // Log or process the error
                    alert(JSON.stringify(error))
                });

        },
        async registered(id) {
            const toast = await toastController.create({
                message: `Зарегистрирован №${id}`,
                duration: 3500,
                color: "primary",
                position: 'top',
            });

            await toast.present();
        }
    }
});
</script>

<style scoped>
ion-content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}
</style>