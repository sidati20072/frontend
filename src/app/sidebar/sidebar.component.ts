import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from '../services/authentification.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public samplePagesCollapsed = true;

  ngOnInit() {
  }

  constructor(private authservice: AuthentificationService) {}


  isAdmin() {
    return this.authservice.isAdmin();
  }

  isUser() {
    console.log('isUser' + this.authservice.isUser());
    return this.authservice.isUser();
  }

  isAuthenticated() {

    return this.authservice.isAuthenticated();
  }
}
