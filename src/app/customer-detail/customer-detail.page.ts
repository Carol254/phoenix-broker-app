import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonButton } from '@ionic/angular/standalone';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.page.html',
  styleUrls: ['./customer-detail.page.scss'],
  standalone: true,
  imports: [IonButton, IonItem, IonList, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class CustomerDetailPage implements OnInit {


  constructor(private route:ActivatedRoute , private  customerService:CustomerService ,private router:Router) { }

   customer:any;


   ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.customer = this.customerService.getCustomerById(+id);
    } else {
      console.error('Customer ID is null');
    }
  }

  back(){
    this.router.navigate(['tabs/customers']);
  }
}
