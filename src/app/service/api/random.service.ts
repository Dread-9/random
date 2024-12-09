import { Injectable } from '@angular/core';
import { API_ENDPOINTS } from '../../global';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UploadResponse } from '../../models/UploadResponse.model';
import { RandomImage } from '../../models/RandomImage.model';
import { Quack } from '../../models/Quack.model';
import { GifByNumber, ImageByNumber, ImageList } from '../../models/ImageList.model';
import { HttpImage } from '../../models/HttpImage.model';

@Injectable({
  providedIn: 'root'
})
export class RandomService {

  constructor(private http: HttpClient) { }

  getRandomImage(): Observable<RandomImage> {
    return this.http.get<RandomImage>(API_ENDPOINTS.RANDOM);
  }

  getQuack(): Observable<Quack> {
    return this.http.get<Quack>(API_ENDPOINTS.QUACK);
  }

  getImageList(): Observable<ImageList> {
    return this.http.get<ImageList>(API_ENDPOINTS.LIST);
  }

  getImageByNumber(num: string): Observable<ImageByNumber> {
    return this.http.get(API_ENDPOINTS.IMAGE_BY_NUM(num), { responseType: 'blob' });
  }

  getGifByNumber(num: string): Observable<GifByNumber> {
    return this.http.get(API_ENDPOINTS.GIF_BY_NUM(num), { responseType: 'blob' });
  }

  getHttpImage(code: string): Observable<HttpImage> {
    return this.http.get<HttpImage>(API_ENDPOINTS.HTTP_IMAGE(code));
  }

  uploadImage(image: File): Observable<UploadResponse> {
    const formData = new FormData();
    formData.append('file', image);

    return this.http.post<UploadResponse>(API_ENDPOINTS.UPLOAD, formData);
  }
}