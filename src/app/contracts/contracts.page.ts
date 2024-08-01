import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonSearchbar, IonList, IonItem ,IonButton,IonLabel, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.page.html',
  styleUrls: ['./contracts.page.scss'],
  standalone: true,
  imports: [IonCol, IonRow, IonGrid, IonItem, IonList, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule ,IonSearchbar,IonButton,IonLabel]
})
export class ContractsPage  {
  contractList:any[] =[
    {
      id:0,
      name:'antrag001',
      category:'health'
    },
    {
      id:1,
      name:'antrag002',
      category:'health'
    },
    {
      id:2,
      name:'antrag003',
      category:'health'
    },
    {
      id:3,
      name:'antrag004',
      category:'animals'
    },
    {
      id:4,
      name:'antrag005',
      category:'car'
    },
    {
      id:5,
      name:'antrag006',
      category:'health'
    },
    {
      id:6,
      name:'antrag007',
      category:'health'
    },
    {
      id:7,
      name:'antrag008',
      category:'car'
    },
    {
      id:8,
      name:'antrag009',
      category:'health'
    },
    {
      id:9,
      name:'antrag010',
      category:'health'
    },
    {
      id:10,
      name:'antrag011',
      category:'car'
    },
    {
      id:11,
      name:'antrag012',
      category:'car'
    },
    {
      id:12,
      name:'antrag011',
      category:'car'
    },
    {
      id:13,
      name:'antrag013',
      category:'car'
    },
    {
      id:14,
      name:'antrag014',
      category:'car'
    },
    {
      id:15,
      name:'antrag015',
      category:'car'
    },
    {
      id:16,
      name:'antrag016',
      category:'car'
    },
  ]

  searchQuery:string = '';
  originalContractList :any[]= [...this.contractList];

  newContract: any = { id: null, name: '', category: '' };

  constructor() { }

  onSearch(event:any){
    const query = event.target.value.toLowerCase();
    this.contractList = this.originalContractList.filter((c)=> c.name.toLowerCase().indexOf(query) >-1);
  }

  onClear(){
    this.searchQuery = '';
    this.contractList = [...this.originalContractList]; 
  }

  addContract() {
    const newId = this.contractList.length ? Math.max(...this.contractList.map(c => c.id)) + 1 : 1;
    const newContract = { ...this.newContract, id: newId };

    this.contractList = [...this.contractList, newContract];
    this.originalContractList = [...this.originalContractList, newContract];

    this.newContract = { id: null, name: '', category: '' }; 
  }

}
