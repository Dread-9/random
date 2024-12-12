import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL, ENDPOINTS, HTTP_OPTIONS_JSON } from 'src/app/global';

@Injectable({
  providedIn: 'root'
})
export class RandomApiService {
  private baseUrl = BASE_URL;

  constructor(private http: HttpClient) {}

  getRandomImage(type: string = 'jpg'): Observable<any> {
    return this.http.get(`${this.baseUrl}${ENDPOINTS.RANDOM_IMAGE(type)}`, HTTP_OPTIONS_JSON);
  }

  getRandomGif(): Observable<any> {
    return this.http.get(`${this.baseUrl}${ENDPOINTS.RANDOM_GIF}`, HTTP_OPTIONS_JSON);
  }

  getRandomImageFile(type: string = 'jpg'): Observable<any> {
    return this.http.get(`${this.baseUrl}${ENDPOINTS.RANDOM_IMAGE_FILE(type)}`, { responseType: 'arraybuffer' });
  }

  getList(): Observable<any> {
    return this.http.get(`${this.baseUrl}${ENDPOINTS.LIST}`, HTTP_OPTIONS_JSON);
  }

  getImage(num: number, type: string = 'jpg'): Observable<any> {
    return this.http.get(`${this.baseUrl}${ENDPOINTS.IMAGE(num, type)}`, { responseType: 'arraybuffer' });
  }

  getHttpImage(statusCode: number): Observable<any> {
    return this.http.get(`${this.baseUrl}${ENDPOINTS.HTTP_IMAGE(statusCode)}`, { responseType: 'arraybuffer' });
  }
}