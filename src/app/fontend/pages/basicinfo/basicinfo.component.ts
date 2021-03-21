import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validator, Validators} from '@angular/forms';

@Component({
  selector: 'app-basicinfo',
  templateUrl: './basicinfo.component.html',
  styleUrls: ['./basicinfo.component.css'],
})
export class BasicinfoComponent implements OnInit {
  submitted = true;
  
  constructor() {}
  countries = [
    {
      id: 1,
      name: 'india',
    },
    {
      id: 2,
      name: 'Bengladesh',
    },
    {
      id: 3,
      name: 'Afghanistan',
    },
    {
      id: 4,
      name: 'Albania',
    },
    {
      id: 5,
      name: 'Algeria',
    },
    {
      id: 6,
      name: 'Andorra',
    },
    {
      id: 7,
      name: 'Angola',
    },
  ];
  ngOnInit(): void {}
  formitem = new FormGroup({
   fname:new FormControl('',[Validators.required,Validators.maxLength(6)]),
   email:new FormControl('',[Validators.required,Validators.email]),
   phone:new FormControl('',[Validators.required]),
   age: new FormControl('',[Validators.required]),
   country:new FormControl('Select'),
   gender: new FormControl('',[Validators.required]),
   gd: new FormControl('',[Validators.required]),
   pg: new FormControl('',[Validators.required])

  });
  // get email(){
  //   return this.formitem.get('email')
  // }
  onSubmit() {
    if(this.formitem.invalid){
      alert("form is not properly filled by user")
    }
    else{
      alert("form data are saved successfully"+JSON.stringify(this.formitem.value))
    }

   
    
  }
  styleobject(){
    return {
      color:"red",
      fontsize:'2px'
    }
  }
}
