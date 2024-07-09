<template>
  <ion-page>
    <!-- Содержимое шаблона -->
    <ion-content :fullscreen="true">
      <div v-if="!workerIdValid" id="input-container">
        <input type="number" v-model="workerIdInput" placeholder="Worker ID" />
        <ion-button @click="applyWorkerId">Apply</ion-button>
      </div>
      <div v-else id="greeting-container">
        <div>hi</div>
        <ion-button @click="toggleFullScreen">Make Full Screen</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonButton } from '@ionic/vue';
import { ref, onMounted, computed } from 'vue';

export default {
  components: {
    IonContent,
    IonButton
  },
  data(){
    return {
      workerIdInput: "
    }
  },
  setup() {
    //
  },

  mounted(){
    //
  };
  
}
</script>

<style scoped>
#input-container, #greeting-container {
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

#input-container input {
  width: 100px;
}
</style>