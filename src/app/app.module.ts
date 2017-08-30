import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

import { AppComponent }  from './app.component';
import { HeaderComponent }  from './header/header.component';
import { SliderComponent }  from './slider/slider.component';
import { MainComponent }  from './main/main.component';
import { weatherService } from './service/weather.service';


@NgModule({
  imports:      [ BrowserModule ,FormsModule ,HttpModule],
  declarations: [ AppComponent ,HeaderComponent ,SliderComponent ,MainComponent],
  bootstrap:    [ AppComponent ],
  providers :   [ weatherService ]
  
})
export class AppModule { }
