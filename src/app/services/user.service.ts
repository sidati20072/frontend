import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import {User} from '../Models/User.model';
import {AuthentificationService} from './authentification.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  host: string = 'http://localhost:8181/';
  host2: string = 'http://localhost:8180/';
  message: string;


    constructor(private httpClient: HttpClient , private authService : AuthentificationService) {   }


  createUserByEmail(form) {
    this.httpClient.post(this.host + 'signup', form).subscribe(

        (value) => {
          console.log("user created" + value);
        },error1 => {
          console.log("erreur de creation utilisateur " + error1);
        }
    );
  }


     createEntreprise(user){

         const httpOptions = {
             headers: new HttpHeaders({
                 'Content-Type': 'application/json',
             })
         }
      this.httpClient.post(this.host2 + 'users', user , httpOptions).subscribe(

            (value) => {

                   this.message = "created";
            },error1 => {

               this.message = " error de creation";
                console.log("erreur de creation utilisateur " + error1);
            }
        );
            return this.message;
    }

    getUsers() {

        return null;

    }
}
