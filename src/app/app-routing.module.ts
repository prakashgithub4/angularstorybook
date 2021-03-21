import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './fontend/pages/home/home.component';
import {ServicesComponent} from './fontend/pages/services/services.component';
import{ClientsComponent} from './fontend/pages/clients/clients.component';
import {ContactComponent} from './fontend/pages/contact/contact.component';
import{BasicinfoComponent} from './fontend/pages/basicinfo/basicinfo.component';
import {BasictableComponent} from './fontend/pages/basictable/basictable.component';


const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'services',component:ServicesComponent},
    {path:'client',component:ClientsComponent},
    {path:'contact' ,component:ContactComponent},
    {path:'basicinfo',component:BasicinfoComponent},
    {path:'basictable',component:BasictableComponent}
    

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
