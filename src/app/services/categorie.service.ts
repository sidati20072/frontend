import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthentificationService} from './authentification.service';
import {Offre} from '../Models/Offre.model';
import {Observable} from 'rxjs';
import {User} from '../Models/User.model';
import {Categorie} from '../Models/Categorie.model';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  host: string = 'http://localhost:8280/';

  constructor(private httpClient: HttpClient , private authService: AuthentificationService) { }



  getCategories():Observable <Categorie[]>{
    const httpOptions = {
      headers: new HttpHeaders({
      //  'Authorization':  this.authService.jwt
      })
    };
    return this.httpClient.get<Categorie[]>(this.host + 'categories', httpOptions);

  }

}
