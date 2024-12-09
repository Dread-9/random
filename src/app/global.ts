export const BASE_URL = 'https://random-d.uk/api/v2';

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


API_ENDPOINTS.IMAGE_BY_NUM('51');
API_ENDPOINTS.GIF_BY_NUM('12');
API_ENDPOINTS.HTTP_IMAGE('404');