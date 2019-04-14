import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import {User} from '../Models/User.model';
import {AuthentificationService} from './authentification.service';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  host: string = 'http://localhost:8181/';
  host2: string = 'http://localhost:8180/';
  message: string;
  users: User[];
  user: User;


    constructor(private httpClient: HttpClient , private authService : AuthentificationService) {   }


   createUserByEmail(form)  {
   return  this.httpClient.post(this.host2 + 'invite', form);

  }


     createEntreprise(user){

         const httpOptions = {
             headers: new HttpHeaders({
                 'Content-Type': 'application/json',
             })
         };
      this.httpClient.post(this.host2 + 'create_entreprise', user , httpOptions).subscribe(

            (value) => {

                   this.message = "User a été créer ";
            },error1 => {

               this.message = " error de creation";
                console.log("erreur de creation utilisateur " + error1);
            }
        );
            return this.message;
    }

    getUsers():Observable <User[]>{
        const httpOptions = {
            headers: new HttpHeaders({
                'Authorization':  this.authService.jwt
            })
        };
         return this.httpClient.get<User[]>(this.host2 + 'membres', httpOptions);

    }
}
