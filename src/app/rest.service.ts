import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RestService {
  url="https://jsonplaceholder.typicode.com/";
  loading =true;
  posts =[];
  constructor(private http:HttpClient) { 
   
  }
  getPost(){
       
      return this.http.get(this.url+"posts");
  }
}
