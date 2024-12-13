import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonList, IonItem, IonThumbnail, IonImg, IonLabel, IonButton, IonSpinner, IonItemDivider, IonRouterLink, IonIcon, IonAlert, IonBadge} from '@ionic/angular/standalone';
import { ImageList } from 'src/app/shared/models/ImageList.model';
import { RouterModule } from '@angular/router';
import { RandomApiService } from 'src/app/shared/service/api/random.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
  standalone: true,
  imports: [IonAlert, IonSpinner, IonButton, CommonModule, FormsModule, IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonList, IonItem, IonThumbnail, IonImg, IonLabel, IonItemDivider, IonIcon,IonBadge, RouterModule]
})
export class ListPage implements OnInit {
  imageList!: ImageList;

  constructor(private randomApiService: RandomApiService) {}

  
  ngOnInit() {
    this.randomApiService.getList()
      .pipe(
        tap(data => this.imageList = data)
      )
      .subscribe();
  }
}