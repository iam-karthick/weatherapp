import { Component } from '@angular/core';
import { weatherService } from '../service/weather.service';
import { FormsModule } from '@angular/forms'
@Component({
  selector: 'my-main',
  templateUrl: `./main.component.html`,
})
export class MainComponent  { 
    searching:string;
    searches:string;
    weatheruser:any;
    location:string;
   
    constructor( private  weatherserve :weatherService ) {
  
    }
     weatherUser(){
        console.log(this.searching)
        this.weatherserve.weatherUsers(this.searching).subscribe(res => {  
            this.searches = res;
            console.log(this.searches)
      });
    }   
}