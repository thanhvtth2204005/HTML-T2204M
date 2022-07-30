import {Component} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {IBurger} from "../interface/drinks.interface";

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html'
})

export class DrinksComponent {
  data : IBurger | undefined;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    const url = 'https://foodgroup.herokuapp.com/api/category/4';
    this.http.get<IBurger>(url)
      .subscribe(value => {
        this.data = value;
      })
  }
}