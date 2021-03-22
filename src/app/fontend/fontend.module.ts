import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PagesComponent } from './pages/pages.component';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from '../app-routing.module';
import { ServicesComponent } from './pages/services/services.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BasicinfoComponent } from './pages/basicinfo/basicinfo.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { BasictableComponent } from './pages/basictable/basictable.component';
import { ServiceComponentComponent } from './pages/service-component/service-component.component';
import { ExampleApiComponent } from './pages/example-api/example-api.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';






@NgModule({
  declarations: [SidebarComponent, PagesComponent, HomeComponent, ServicesComponent, ClientsComponent, ContactComponent, BasicinfoComponent, BasictableComponent, ServiceComponentComponent, ExampleApiComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    NgxSkeletonLoaderModule,
    ReactiveFormsModule
  ],
  exports:[SidebarComponent,PagesComponent,HomeComponent,ServicesComponent]
})
export class FontendModule { }
