import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonFabButton, IonFab, IonLabel, IonItem, IonList, IonButton, IonMenuButton, IonButtons, IonImg, IonIcon, IonCard,IonText} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { RandomImage } from 'src/app/shared/models/RandomImage.model';
import { RandomApiService } from 'src/app/shared/service/api/random.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonFab, IonFabButton, CommonModule, FormsModule, IonMenuButton, IonButtons, IonImg, IonCard,IonLabel,IonText]
})
export class HomePage implements OnInit {
  randomImageUrl!: RandomImage;

  constructor(
    private router: Router,
    private randomService: RandomApiService,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    this.loadRandomImage();
  }

  async loadRandomImage() {
    this.randomService.getRandomImage('JPG').subscribe({
      next: (response) => {
        this.randomImageUrl = response.url;
        this.presentToast('Se cambio la imagen de manera exitosa');
      },
      error: (error) => {
        console.error('Error al cargar la imagen random:', error);
      }
    });
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      mode:'ios',
      message: message,
      duration: 2000,
      position: 'top',
      color:'success'
    });
    toast.present();
  }

  refreshImage() {
    this.loadRandomImage();
  }
}