import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonFabButton, IonFab, IonLabel, IonItem, IonList, IonButton, IonMenuButton, IonButtons, IonImg,IonIcon 
  ,IonCard
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { RandomService } from 'src/app/shared/service/api/random.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonButton, IonHeader, IonToolbar, IonTitle, IonContent, IonFab, IonFabButton, CommonModule, FormsModule, IonButton, IonMenuButton, IonButtons, IonImg
    ,IonIcon,IonCard
  ]
})
export class HomePage implements OnInit {
  randomImageUrl!: string;

  constructor(
    private router: Router,
    private randomService: RandomService) { }

  ngOnInit() {
  }


  refreshImage() {
  }
}