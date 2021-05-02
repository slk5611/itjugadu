import { Component, OnInit, ViewChild } from '@angular/core';
import { ContactService } from '../../services/contact/contact.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @ViewChild('f') f: NgForm;

  oContact: any = {};
  contactMessage: any = '';
  constructor(private contactService: ContactService) { }

  ngOnInit() {
  }

  addContact() {
    this.contactService.addContact(this.oContact)
      .subscribe(data => {
        this.contactMessage = data;
        this.f.resetForm();
      },
        error => {
        this.contactMessage = error;
        });
  }
}
