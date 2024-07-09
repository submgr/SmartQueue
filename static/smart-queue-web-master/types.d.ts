import { AxiosResponse as _AxiosResponse } from 'axios';

declare global {
  type AxiosResponse<T = any> = _AxiosResponse<T>;
}