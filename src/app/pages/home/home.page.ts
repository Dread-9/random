import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent,
  IonFabButton,
  IonFab, IonLabel, IonItem ,IonList, IonButton } from '@ionic/angular/standalone';
import { Router, RouterModule } from '@angular/router';
import { RandomImage } from 'src/app/shared/models/RandomImage.model';
import { ImageList } from 'src/app/shared/models/ImageList.model';
import { RandomService } from 'src/app/shared/service/api/random.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonButton, 
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent,
    IonFab, 
    IonFabButton,
    CommonModule,
    FormsModule]
})
export class HomePage implements OnInit {
  randomDuckUrl: string | null = null;
  randomDuckMessage: string | null = null;

  constructor(private router: Router, private randomService: RandomService) { }

  ngOnInit() {
    this.loadRandomDuck();
  }

  loadRandomDuck(): void {
    this.randomService.getRandom().subscribe((data) => {
      this.randomDuckUrl = data.url;
      this.randomDuckMessage = data.message;
    });
  }
}
