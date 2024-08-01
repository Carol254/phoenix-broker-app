import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  
  customers = [
    { id: 1, name: 'Alice Johnson', placeOfResidence: 'New York', age: 28, occupation: 'Software Engineer' },
    { id: 2, name: 'Bob Smith', placeOfResidence: 'Los Angeles', age: 34, occupation: 'Graphic Designer' },
    { id: 3, name: 'Charlie Brown', placeOfResidence: 'Chicago', age: 42, occupation: 'Project Manager' },
    { id: 4, name: 'David Wilson', placeOfResidence: 'Houston', age: 25, occupation: 'Marketing Specialist' },
    { id: 5, name: 'Emma Davis', placeOfResidence: 'Phoenix', age: 30, occupation: 'Financial Analyst' },
    { id: 6, name: 'Frank Garcia', placeOfResidence: 'Philadelphia', age: 27, occupation: 'Teacher' },
    { id: 7, name: 'Grace Lee', placeOfResidence: 'San Antonio', age: 31, occupation: 'Nurse' },
    { id: 8, name: 'Henry Martinez', placeOfResidence: 'San Diego', age: 37, occupation: 'Architect' },
    { id: 9, name: 'Isabella Hernandez', placeOfResidence: 'Dallas', age: 29, occupation: 'Lawyer' },
    { id: 10, name: 'Jack Robinson', placeOfResidence: 'San Jose', age: 40, occupation: 'Accountant' }
  ];

  constructor() { }

  getCustomerById(id: number) {
    return this.customers.find(customer => customer.id === id);
  }
}
