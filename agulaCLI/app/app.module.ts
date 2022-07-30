import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { className } from './classroom/class';
import { classroom } from './classroom/classroom.component';
import { CurrentweatherComponent } from './currentwearher/currentweather.component';
import { StudentComponet } from './student/student.component';
import {HttpClientModule} from "@angular/common/http";
import { WeatherAssignment1 } from './assignment1/assignment1';
import { Routes, RouterModule } from '@angular/router';
import { Login } from './login/login.component';
import { ProductListComponent } from './exam/product-list.component';
import { CatalogeComponent } from './exam/cataloge.component';
import { DrinksComponent } from './exam/drinks.component';

const appRouters: Routes = [
  {path: '',component: ProductListComponent},
  {path: '4',component: DrinksComponent},
  
];

@NgModule({
  declarations: [
    AppComponent,
    // khai bao o day
    StudentComponet,
    classroom,
    className,
    CurrentweatherComponent,
    WeatherAssignment1,
    Login,
    ProductListComponent,
    CatalogeComponent,
    DrinksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRouters)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
