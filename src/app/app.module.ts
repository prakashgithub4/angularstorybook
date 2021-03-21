import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FontendModule} from './fontend/fontend.module';
import {PagesComponent} from './fontend/pages/pages.component';
import { BasictableComponent } from './pages/basictable/basictable.component';


@NgModule({
  declarations: [
    AppComponent,
    BasictableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontendModule
  ],
  providers: [],
  bootstrap: [PagesComponent]
})
export class AppModule { }
