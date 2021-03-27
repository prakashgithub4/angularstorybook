import { Component, OnInit } from '@angular/core';
import{RestService} from '../../../rest.service';

@Component({
  selector: 'app-example-api',
  templateUrl: './example-api.component.html',
  styleUrls: ['./example-api.component.css']
})
export class ExampleApiComponent implements OnInit {
   posts:any =[];
  constructor(private http:RestService) { }
   loader = true
   //loadercontrol = {'disply':'block'}
  ngOnInit(): void {
    this.http.getPost().subscribe((result)=>{

      this.posts = result;
     console.log(result);
     this.loader =false;
    })
  }

}
