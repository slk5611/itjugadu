import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { webUri } from '../../config/constant';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  webUri: any = webUri;
  constructor(private http: HttpClient) { }

  addContact(data) {
    return this.http.post(this.webUri + '/contacts', data);
  }

}
