import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonSearchbar, IonGrid, IonRow, IonCol ,IonCard,IonCardHeader,IonCardTitle,IonCardContent,IonCardSubtitle,IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [IonCol, IonRow, IonGrid, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule  ,IonSearchbar ,IonCard,IonCardHeader,IonCardTitle,IonCardContent,IonCardSubtitle,IonButton]
})
export class DashboardPage implements OnInit {
  
  contracts:any;
  customers:any;
  documents:any;

  constructor() { }

  ngOnInit() {

    this.contracts = 30;
    this.customers = 1000;
    this.documents = 6000;
  }

}
