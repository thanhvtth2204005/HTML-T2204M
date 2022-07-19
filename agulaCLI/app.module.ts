import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { className } from './classroom/class';
import { classroom } from './classroom/classroom.component';
import { StudentComponet } from './student/student.component';

@NgModule({
  declarations: [
    AppComponent,
    // khai bao o day
    StudentComponet,
    classroom,
    className

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
