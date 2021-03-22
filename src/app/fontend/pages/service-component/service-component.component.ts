import { Component, OnInit } from '@angular/core';
import {TestService} from '../../../test.service';

@Component({
  selector: 'app-service-component',
  templateUrl: './service-component.component.html',
  styleUrls: ['./service-component.component.css']
})
export class ServiceComponentComponent implements OnInit {
   data:any =[];
  constructor(private testservice:TestService) { 
    this.data = testservice.getArray();
  }

  ngOnInit(): void {
  }

}
