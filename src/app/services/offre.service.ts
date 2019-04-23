import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthentificationService} from './authentification.service';
import {Observable} from 'rxjs';
import {Offre} from '../Models/Offre.model';

@Injectable({
  providedIn: 'root'
})
export class OffreService {
  host: string = 'http://localhost:8280/';

  constructor(private httpClient: HttpClient , private authService: AuthentificationService) { }


  createOffre(offre){

    const httpOptions = {
      headers: new HttpHeaders({
       // 'Authorization': this.authService.jwt,
      })
    };
      return this.httpClient.post<Offre>(this.host + 'create_offre', offre, httpOptions);
  }

  getOffres():Observable <any[]>{
    const httpOptions = {
      headers: new HttpHeaders({
        //'Authorization':  this.authService.jwt
      })
    };
    return this.httpClient.get<Offre[]>(this.host + 'offres', httpOptions);

  }
}
