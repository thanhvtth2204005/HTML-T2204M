import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { List } from "../interface/assignment1";
@Component({
    selector:'app-weatherAgm1',
    templateUrl:'./assignment1.html'
})
export class WeatherAssignment1 {
   list :List[]|undefined;

   constructor(private http: HttpClient){

   }
   ngOnInit(){
    const url ='http://api.openweathermap.org/data/2.5/forecast?q=Hanoi,vietnam&appid=09a71427c59d38d6a34f89b47d75975c&units=metric';
    this.http.get<WeatherAssignment1>(url)
    .subscribe(value=>{
      this.list = value.list;
    })
   }
}
