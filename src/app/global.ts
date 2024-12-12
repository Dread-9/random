export const BASE_URL = 'https://random-d.uk/api';
export const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB en bytes
export const ALLOWED_FILE_TYPES = ['image/jpeg', 'image/png', 'image/gif'];

export const API_ENDPOINTS = {
    RANDOM: `${BASE_URL}/random`,
    QUACK: `${BASE_URL}/quack`,
    RANDOM_IMG: `${BASE_URL}/randomimg`,
    LIST: `${BASE_URL}/list`,
    IMAGE_BY_NUM: (num: string) => `${BASE_URL}/${num}.jpg`,
    GIF_BY_NUM: (num: string) => `${BASE_URL}/${num}.gif`,
    HTTP_IMAGE: (code: string) => `${BASE_URL}/http/${code}`,
    UPLOAD: `${BASE_URL}/add`
};

export const GLOBAL_CONFIG = {
  API_BASE_URL: BASE_URL,
  MAX_FILE_SIZE: MAX_FILE_SIZE,
  ALLOWED_FILE_TYPES: ALLOWED_FILE_TYPES,
  HTTP_HEADERS: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Expose-Headers': 'access-control-allow-origin'
  },
  API_ENDPOINTS: API_ENDPOINTS
};