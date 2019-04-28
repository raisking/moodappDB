import { Component, OnInit, Input } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-new-app-form',
  templateUrl: './new-app-form.component.html',
  styleUrls: ['./new-app-form.component.css']
})
export class NewAppFormComponent implements OnInit {
  @Input() firstName: string;
  @Input() lastName: string;
  @Input() mood: string;
  private mode = 'add'; //default mode
  private id: string; //student ID


  onSubmit() {
    console.log("You submitted: " + this.firstName + " " + this.lastName + "" + this.mood);
    if (this.mode == 'add')
      this._myService.addUsers(this.firstName, this.lastName, this.mood);
    if (this.mode == 'edit')
      this._myService.updateUser(this.id, this.firstName, this.lastName, this.mood);

    this.router.navigate(['/listUsers']);
  }

  //initialize the call using StudentService 
  constructor(private _myService: StudentService, private router: Router, public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('_id')) {
        this.mode = 'edit'; /*request had a parameter _id */
        this.id = paramMap.get('_id');
      }
      else {
        this.mode = 'add';
        this.id = null;
      }
    });
  }

}
