import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonFabButton, IonFab, IonLabel, IonItem, IonList, IonButton,IonMenuButton,IonButtons} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { RandomService } from 'src/app/shared/service/api/random.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonButton, IonHeader, IonToolbar, IonTitle, IonContent, IonFab, IonFabButton, CommonModule, FormsModule,
    IonButton,IonMenuButton,IonButtons
  ]
})
export class HomePage implements OnInit {
  randomDuckUrl: string | null = null;
  randomDuckMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(  
    private router: Router,
    private randomService: RandomService) { }

  ngOnInit() {
    this.loadRandomDuck();
  }

  loadRandomDuck(): void {
    this.randomService.getRandom().subscribe(
      (data) => {
        this.randomDuckUrl = data.url;
        this.randomDuckMessage = data.message;
      },
      (error) => {
        this.errorMessage = 'No se pudo cargar el pato aleatorio. Inténtalo nuevamente más tarde.';
        console.error('Error cargando pato aleatorio:', error);
      }
    );
  }
}