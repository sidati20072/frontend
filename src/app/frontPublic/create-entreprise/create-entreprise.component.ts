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
    console.log(form.value);
    this.user = new User();

    this.user.username = form.value['email'];
    this.user.password = form.value['password'];
    this.user.email = form.value['email'];
    this.user.civilite = form.value['civilite'];
    this.user.fonction = form.value['fonction'];
    this.user.nom = form.value['nom'];
    this.user.prenom = form.value['prenom'];
    this.user.entreprise = new Entreprise(form.value['nomentreprise'], form.value['addressentreprise'], form.value['logo']);

    this.message = this.userService.createEntreprise(form.value);
    if (this.message=="created"){
      this.router.navigate(['/login']);
    } else {
        return ;}
  }
}
