import {Component} from "@angular/core";
import {IProductList} from "../interface/product-list.interface";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})

export class ProductListComponent{
  data : IProductList | undefined;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    const url = 'https://foodgroup.herokuapp.com/api/today-special';
    this.http.get<IProductList>(url)
      .subscribe(value => {
        this.data = value;
      })
  }
}