//khoi tao student
import { Component, Input} from "@angular/core";
import { IStudent } from "../classroom/interfaces/student.interfaces";
@Component({
    selector:'app-Student',
    // template:'<h1> Student </h1>' 
    templateUrl:'./student.component.html'
})
export class StudentComponet{
    @Input()
    data!: IStudent;
    
}
