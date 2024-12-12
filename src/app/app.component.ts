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
  items = [
    { title: 'Home', link: '/home', icon: 'home-outline' },
    { title: 'Image List', link: '/image-list', icon: 'image-outline' },
    { title: 'Upload Image', link: '/upload-image', icon: 'cloud-upload-outline' },
    { title: 'List', link: '/list', icon: 'list-outline' },
    { title: 'View Image', link: '/view-image', icon: 'eye-outline' },
  ];
  constructor(){}
}