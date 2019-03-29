import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Subject } from 'rxjs/Subject';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  host: string = 'http://localhost:8181/signup';

  constructor(private httpClient: HttpClient ) {   }


  createUserByEmail(form) {
    console.log(form);
    this.httpClient.post(this.host, form).subscribe(

        (value) => {
          console.log("user created" + value);
        },error1 => {
          console.log("erreur de creation utilisateur " + error1);
        }
    );
  }
}
