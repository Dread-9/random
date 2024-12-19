import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton,IonImg, IonIcon, IonFab, IonFabButton,IonCard,IonBadge,IonBackButton,IonButton, IonSegmentButton, IonCardContent, IonText } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-image',
  templateUrl: './view-image.page.html',
  styleUrls: ['./view-image.page.scss'],
  standalone: true,
  imports: [IonText, IonCardContent, IonSegmentButton, IonFabButton, IonFab, IonIcon, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonMenuButton,IonImg,IonCard,IonBadge,IonBackButton,IonButton]
})
export class ViewImagePage implements OnInit {
  imageUrl: string | null = null;
  imageNumber: string | null = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.imageUrl = `https://random-d.uk/api/${id}`;
      this.imageNumber = id; 
    }
  }
}