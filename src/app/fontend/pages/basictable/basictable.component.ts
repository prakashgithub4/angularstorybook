import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basictable',
  templateUrl: './basictable.component.html',
  styleUrls: ['./basictable.component.css']
})
export class BasictableComponent implements OnInit {

  constructor() { }
  collection =[
    {
    name:"aaa",
    sub1:20,
    sub2:60,
    total:"34",

  },
  {
    name:"aaa",
    sub1:40,
    sub2:40,
    total:"34",

  },
  {
    name:"aaa",
    sub1:20,
    sub2:40,
    total:"34",

  },
  {
    name:"aaa",
    sub1:90,
    sub2:40,
    total:"34",

  },
  {
    name:"aaa",
    sub1:10,
    sub2:10,
    total:"34",

  }];
   flag =true;
  ngOnInit(): void {
    
  }
  getdetails(data:any){
   alert(JSON.stringify(data))
  }
  toggletable(){
    this.flag =!this.flag;
    
  }
  buttonAction(){
    if(this.flag == true){
      return {display:"block"}
    }
    else{
      return {display:"none"}
    }
  }


 

}
