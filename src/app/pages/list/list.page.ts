import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonList, IonItem, IonThumbnail, IonImg, IonLabel, IonButton, IonSpinner,IonItemDivider,IonRouterLink,IonIcon } from '@ionic/angular/standalone';
import { ImageList } from 'src/app/shared/models/ImageList.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
  standalone: true,
  imports: [
    IonSpinner, 
    IonButton, 
    CommonModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonList,
    IonItem,
    IonThumbnail,
    IonImg,
    IonLabel,
    IonItemDivider,
    IonIcon,
    RouterModule
  ],
})
export class ListPage implements OnInit {
  imageList: ImageList = {
    gif_count: 5,
    gifs: [
      'https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif',
      'https://media.giphy.com/media/l0HlNQ03J5JxX6lva/giphy.gif',
      'https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif',
      'https://media.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif',
      'https://media.giphy.com/media/3oEduSbSGpGaRX2Vri/giphy.gif'
    ],
    http: [
      'https://via.placeholder.com/150/0000FF',
      'https://via.placeholder.com/150/FF0000',
      'https://via.placeholder.com/150/00FF00',
      'https://via.placeholder.com/150/FFFF00',
      'https://via.placeholder.com/150/FF00FF'
    ],
    image_count: 5,
    images: [
      'https://via.placeholder.com/150/0000FF',
      'https://via.placeholder.com/150/FF0000',
      'https://via.placeholder.com/150/00FF00',
      'https://via.placeholder.com/150/FFFF00',
      'https://via.placeholder.com/150/FF00FF'
    ]
  };
  isLoading = false;
  error: string | null = null;

  constructor() {}

  ngOnInit() {}
}