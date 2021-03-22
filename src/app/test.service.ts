import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {
 data:any =[];
  constructor() { }
  getArray(){
    return [
      {
        id: 1,
        name: 'Angular Http Post Request Example'
      },
      {
        id: 2,
        name: 'Angular 9 Routing and Nested Routing Tutorial With Example'
      },
      {
        id: 3,
        name: 'How to Create Custom Validators in Angular 9?'
      },
      {
        id: 4,
        name: 'How to Create New Component in Angular 9?'
      }
    ];
  }
}
