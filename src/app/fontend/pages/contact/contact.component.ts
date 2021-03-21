import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(formdata:any):any{
    if(formdata.status =="VALID"){
      alert(JSON.stringify(formdata.form.value))
    }
  else{
    alert('Please fill the form properly');
  }
  }
}
