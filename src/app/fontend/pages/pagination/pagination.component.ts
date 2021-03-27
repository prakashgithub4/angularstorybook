import { Component, OnInit } from '@angular/core';
import{RestService} from '../../../rest.service';


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

 
  posts:any =[];
  getPostData:any =[];
  count=0;
  
 
  config: any;
 // collection = { count: 60, data: [] };
  constructor(private http:RestService) { 
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.count
    };
  }
   loader = true
   //loadercontrol = {'disply':'block'}
  ngOnInit(): void {

    this.http.getPost().subscribe((result)=>{
     
      this.posts = result;
      console.log(this.posts[0].id);
      this.count=Object.keys(result).length;
     console.log(Object.keys(result).length);
     this.loader =false;
    });
    
  }
  pageChanged(event:any){
    this.config.currentPage = event;
  }
  

}
