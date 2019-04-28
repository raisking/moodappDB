import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  public students;
  //initialize the call using studentservice
  constructor(private _myService: StudentService) { }
  ngOnInit() {
    this.getUsers();
  }


  //method called OnInit
  getUsers() {
    this._myService.getUsers().subscribe(
      //read data and assign to public variable students
      data => { this.students = data },
      err => console.error(err),
      () => console.log('finished loading')
    );

  }
  onDelete(studentId: string) {
    this._myService.deleteStudent(studentId);
  }

}
