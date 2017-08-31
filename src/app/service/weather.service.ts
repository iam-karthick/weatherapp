import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
  export class weatherService{
    constructor (private http:Http) {
     }

    weatherUsers(location:string){
          if(location){
            console.log('http://api.openweathermap.org/data/2.5/weather?q=' +location+ '&appid=8688562469a983f79d7fa231a8971934')
         return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=' +location+ '&appid=8688562469a983f79d7fa231a8971934' ).map(res => res.json());
      }
    } 
}