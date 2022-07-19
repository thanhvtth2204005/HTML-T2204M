import { Component, Input } from "@angular/core";
import { ISClassName, IStudent } from "./interfaces/student.interfaces";
@Component({
    selector:'class1',
    templateUrl:'./class.html'
})
export class className{
    @Input()
    data!: ISClassName;
}