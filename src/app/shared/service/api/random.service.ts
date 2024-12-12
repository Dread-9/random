import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as globalConfig from '../../../global';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomService {
  private readonly API_BASE_URL = globalConfig.BASE_URL;
  private readonly HTTP_HEADERS = globalConfig.GLOBAL_CONFIG.HTTP_HEADERS;

  constructor(private http: HttpClient) {}

  /**
   * Obtiene una imagen o GIF aleatorio de un pato.
   * @param type Tipo opcional: 'GIF' o 'JPG'
   */
  getRandom(type?: 'GIF' | 'JPG'): Observable<{ url: string; message: string }> {
    const url = `${this.API_BASE_URL}/random` + (type ? `?type=${type}` : '');
    return this.http.get<{ url: string; message: string }>(url, {
      headers: this.HTTP_HEADERS
    }).pipe(
      catchError(error => {
        console.error('Error cargando pato aleatorio:', error);
        return throwError('No se pudo cargar el pato aleatorio. Inténtalo nuevamente más tarde.');
      })
    );
  }

  /**
   * Obtiene una imagen aleatoria de un pato.
   */
  getRandomImage(): Observable<Blob> {
    return this.http.get(`${this.API_BASE_URL}/randomimg`, {
      responseType: 'blob',
      headers: this.HTTP_HEADERS
    });
  }

  /**
   * Obtiene una lista de todas las imágenes y GIFs disponibles.
   */
  getList(): Observable<{ images: string[]; gifs: string[]; image_count: number; gif_count: number }> {
    return this.http.get<{ images: string[]; gifs: string[]; image_count: number; gif_count: number }>(
      `${this.API_BASE_URL}/list`, {
        headers: this.HTTP_HEADERS
      }
    );
  }

  /**
   * Obtiene una imagen específica por su número.
   * @param num El número de la imagen.
   */
  getImageByNumber(num: number): Observable<Blob> {
    return this.http.get(`${this.API_BASE_URL}/${num}.jpg`, {
      responseType: 'blob',
      headers: this.HTTP_HEADERS
    });
  }

  /**
   * Obtiene un GIF específico por su número.
   * @param num El número del GIF.
   */
  getGifByNumber(num: number): Observable<Blob> {
    return this.http.get(`${this.API_BASE_URL}/${num}.gif`, {
      responseType: 'blob',
      headers: this.HTTP_HEADERS
    });
  }

  /**
   * Obtiene una imagen de un pato que representa un código de estado HTTP.
   * @param code El código de estado HTTP.
   */
  getHttpDuckImage(code: number): Observable<Blob> {
    return this.http.get(`${this.API_BASE_URL}/http/${code}`, {
      responseType: 'blob',
      headers: this.HTTP_HEADERS
    });
  }
}