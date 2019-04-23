import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {User} from '../../Models/User.model';
import {Entreprise} from '../../Models/Entreprise.model';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-entreprise',
  templateUrl: './create-entreprise.component.html',
  styleUrls: ['./create-entreprise.component.scss']
})
export class CreateEntrepriseComponent implements OnInit {

  message : string;
  user: User;
  constructor(private userService: UserService ,     private router: Router) { }

  ngOnInit() {
  }



  onSubmit(form: NgForm) {
    this.user = new User();

    this.message = this.userService.createEntreprise(form.value);
    if (this.message=="created"){
      this.router.navigate(['/login']);
    } else {
        return ;}
  }
}
