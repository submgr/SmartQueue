import { AxiosResponse as _AxiosResponse } from 'axios';

declare global {
  type AxiosResponse<T = any> = _AxiosResponse<T>;
}

import Vue from 'vue';

declare module 'vue/types/vue' {
  interface Vue {
    $axios: any; // Используйте более конкретный тип вместо `any`, если возможно
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $axios: any; // Используйте более конкретный тип вместо `any`, если возможно
  }
}