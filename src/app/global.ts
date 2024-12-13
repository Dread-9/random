export const BASE_URL = '/api/v2';

export const ENDPOINTS = {
  RANDOM_IMAGE: (type: string = 'jpg') => `/random?format=json&type=${type}`,
  RANDOM_GIF: '/quack?format=json',
  RANDOM_IMAGE_FILE: (type: string = 'jpg') => `/randomimg?type=${type}`,
  LIST: '/list?format=json',
  IMAGE: (num: number, type: string = 'jpg') => `/${num}.${type}`,
  HTTP_IMAGE: (statusCode: number) => `/http/${statusCode}`
};
export const HTTP_OPTIONS_JSON = { responseType: 'json' as 'json' };