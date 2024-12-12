import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonTitle,IonMenu,IonHeader,IonToolbar,IonContent,IonButtons,IonMenuButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonTitle, IonApp, IonRouterOutlet,IonMenu,IonHeader,IonToolbar,IonContent,IonButtons,IonMenuButton 
  ],
})
export class AppComponent {
  constructor() {}
}
