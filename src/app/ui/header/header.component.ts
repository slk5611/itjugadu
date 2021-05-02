import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService) { }
  oUser = '';
  ngOnInit() {
    this.getUser();
  }

  getUser() {
    if (this.authService.isLogged()) {
     this.oUser = this.authService.getUser().username;
    }
  }

  logoutUser() {
    this.authService.logoutUser();
    window.location.reload();
  }
}
