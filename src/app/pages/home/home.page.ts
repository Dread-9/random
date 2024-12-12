import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonFabButton, IonFab, IonLabel, IonItem, IonList, IonButton, IonMenuButton, IonButtons, IonImg,IonIcon,IonCard } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { RandomImage } from 'src/app/shared/models/RandomImage.model';
import { RandomApiService } from 'src/app/shared/service/api/random.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonFab, IonFabButton, CommonModule, FormsModule, IonMenuButton, IonButtons, IonImg,IonCard
  ]
})
export class HomePage implements OnInit {
  randomImageUrl!: RandomImage;

  constructor(
    private router: Router,
    private randomService: RandomApiService) { }

  ngOnInit() {
    this.loadRandomImage();
  }

  loadRandomImage() {
    this.randomService.getRandomImage('JPG').subscribe({
      next: (response) => {
        this.randomImageUrl = response.url;
      },
      error: (error) => {
        console.error('Error al cargar la imagen random:', error);
      }
    });
  }

  refreshImage() {
    this.loadRandomImage();
  }
}