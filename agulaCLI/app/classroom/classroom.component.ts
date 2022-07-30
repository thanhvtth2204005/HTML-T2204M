import { Component, Input } from "@angular/core";
import { ISClassName, IStudent } from "./interfaces/student.interfaces";
@Component({
    selector:'classroom',
    templateUrl:'./classroom.component.html'
})
export class classroom{
    @Input()
    data!: ISClassName;
    className = 'T2204M';
    
    studentName = [
        'Trương Văn Nam',
        'Nguyễn Thế Anh'
    ];
    studentAges = [18,19];

    // tạo một danh sách sinh viên
    studentArray : IStudent[] =[
        {studentName: 'Trương Văn Nam',studentAge:18, phoneNumber: '0987654321'},
        {studentName: 'Nguyễn Thế Anh',studentAge:21, phoneNumber: '0123456789'}
    ];

    phoneNumber = '0987654321';
    classStatus = true;
    teacherName =[
        'Trần Quang Hòa',
        'Nguyễn Tuân',
        'Đặng Kim Thi'
    ];
    subjectName =[
        'LBEP',
        'HCJS',
        'AJS',
        'DMS'
    ];

    changeName(){
        this.className = 'T2203E';
    }
    
    changeStatus(){
        this.classStatus = !this.classStatus;
    }
}




