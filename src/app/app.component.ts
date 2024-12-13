import { Component } from '@angular/core';
import {
  IonApp, IonRouterOutlet, IonMenu, IonContent, IonList, IonListHeader, IonReorderGroup,
  IonItem, IonIcon, IonLabel, IonReorder,IonImg
} from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [
    IonApp, IonRouterOutlet, IonMenu, IonContent, IonList, IonListHeader,
    IonReorderGroup, IonItem, IonIcon, IonLabel, IonReorder, RouterModule,IonImg
  ],
})
export class AppComponent {
  constructor(){}
}