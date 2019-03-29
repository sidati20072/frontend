import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss', './user.datatable.css']})
export class UserComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

onSubmit(form: NgForm){
      form.value['typecreation'] = 'email';
    this.userService.createUserByEmail(form.value);
}
}
