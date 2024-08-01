import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem ,IonAccordion ,IonAccordionGroup,IonLabel,IonIcon ,IonModal ,IonInput} from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true,
  imports: [IonItem, IonList, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule ,IonAccordion ,IonAccordionGroup ,IonLabel,IonIcon ,IonModal,IonInput]
})
export class SettingsPage  {

 constructor(private router:Router) { }

 logOut(){
    this.router.navigate(['/log-in']);
 }

}
