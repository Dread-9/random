import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonContent, IonLabel, IonButton, IonMenuButton, IonButtons, IonImg,IonText, IonSegmentButton, IonSegment,
 } from '@ionic/angular/standalone';
import { RandomImage } from 'src/app/shared/models/RandomImage.model';
import { RandomApiService } from 'src/app/shared/service/api/random.service';
import { ToastController } from '@ionic/angular';
import { catchError, of, tap } from 'rxjs';
import { ImageList } from 'src/app/shared/models/ImageList.model';
import { register } from 'swiper/element/bundle';
import { RouterModule } from '@angular/router';
register();

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
  imports: [IonSegment, IonSegmentButton, IonHeader, IonToolbar, IonContent, CommonModule, FormsModule, IonMenuButton, IonButtons, IonImg,IonLabel,IonText
    ,IonButton,RouterModule,
  ]
})
export class HomePage implements OnInit {
  selectedSegment: string = 'img';
  currentList: string[] = [];
  randomImageUrl!: RandomImage;
  imageList: ImageList = {
    image_count: 0,
    gif_count: 0,
    images: [],
    gifs: [],
    http: []
  };

  constructor(
    private randomService: RandomApiService,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    this.loadRandomImage();
    this.loadList();
  }

  async loadRandomImage() {
    this.randomService.getRandomImage('JPG').subscribe({
      next: (response) => {
        this.randomImageUrl = response.url;
        this.presentToast('Se cambio la imagen de manera exitosa','success');
      },
      error: (error) => {
        this.presentToast('Error al cargar la imágene', 'danger');
      }
    });
  }

  loadList() {
    this.randomService
      .getList()
      .pipe(
        tap((data: ImageList) => {
          this.imageList = data;
          this.updateCurrentList();
        }),
        catchError((error) => {
          this.presentToast('Error al cargar la lista de imágenes', 'danger');
          return of(null);
        })
      )
      .subscribe();
  }

  updateCurrentList() {
    if (this.selectedSegment === 'img') {
      this.currentList = this.imageList.images.slice(0, 10);
    } else if (this.selectedSegment === 'gifs') {
      this.currentList = this.imageList.gifs.slice(0, 10);
    } else if (this.selectedSegment === 'http') {
      this.currentList = this.imageList.http;
    }
  }

  generateLink(item: string): string {
    if (this.selectedSegment === 'img' || this.selectedSegment === 'gifs') {
      return 'https://random-d.uk/api/' + item;
    } else if (this.selectedSegment === 'http') {
      return 'https://random-d.uk/api/http/' + item;
    }
    return '#';
  }
  

  async presentToast(message: string, color: 'success' | 'danger' = 'success') {
    const toast = await this.toastController.create({
      mode: 'ios',
      message,
      duration: 2000,
      position: 'top',
      color,
    });
    await toast.present();
  }

  refreshImage() {
    this.loadRandomImage();
  }
}