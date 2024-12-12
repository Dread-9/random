import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomApiService {
  private baseUrl = '/api/v2'

  constructor(private http: HttpClient) {}

  getRandomImage(type: string = 'jpg'): Observable<any> {
    return this.http.get(`${this.baseUrl}/random?format=json&type=${type}`);
  }

  getRandomGif(): Observable<any> {
    return this.http.get(`${this.baseUrl}/quack?format=json`);
  }

  getRandomImageFile(type: string = 'jpg'): Observable<any> {
    return this.http.get(`${this.baseUrl}/randomimg?type=${type}`, { responseType: 'arraybuffer' });
  }

  getList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/list?format=json`);
  }

  getImage(num: number, type: string = 'jpg'): Observable<any> {
    return this.http.get(`${this.baseUrl}/${num}.${type}`, { responseType: 'arraybuffer' });
  }

  getHttpImage(statusCode: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/http/${statusCode}`, { responseType: 'arraybuffer' });
  }
}