import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { webUri } from '../../config/constant';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  webUri: any = webUri
  constructor(private http: HttpClient) { }

  registerUser(data) {
    return this.http.post(this.webUri + '/auth/register', data);
  }

  loginUser(data) {
    return this.http.post(this.webUri + '/auth/login', data);
  }

  setUser(user, id) {
    localStorage.setItem('username', user);
    // code = userId
    localStorage.setItem('code', id);
  }

  getUser() {
    // code = userId
    const username = localStorage.getItem('username');
    const code = localStorage.getItem('code');
    return {username, code};
  }

  isLogged() {
    return localStorage.getItem('username') !== '';
  }

  logoutUser() {
    localStorage.setItem('username', '');
    localStorage.setItem('code', '');
  }
}
