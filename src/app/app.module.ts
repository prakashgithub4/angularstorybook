import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FontendModule} from './fontend/fontend.module';
import {PagesComponent} from './fontend/pages/pages.component';
import { BasictableComponent } from './pages/basictable/basictable.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';



@NgModule({
  declarations: [
    AppComponent,
    BasictableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSkeletonLoaderModule,
    FontendModule
  ],
  providers: [],
  bootstrap: [PagesComponent]
})
export class AppModule { }
