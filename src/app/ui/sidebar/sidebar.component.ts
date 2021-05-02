import { Component, OnInit, ViewChild } from '@angular/core';
import { SidebarService } from '../../services/sidebar/sidebar.service';
import { NgForm } from '@angular/forms';
import { imagePath } from '../../config/constant';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @ViewChild('f') f: NgForm;

  oNewsLetter: any = {};
  oNewsMessage: any = '';
  oRandomPost: any = [];
  oMostViewed: any = [];
  oRecentComment: any = [];
  imageUrl: any = imagePath;
  constructor(private sidebarService: SidebarService) {
  }

  ngOnInit() {
    this.getRandomPost();
    this.getMostViewed();
    this.getRecentComment();
  }

  addNewsLetter() {
    this.sidebarService.addNewsLetter(this.oNewsLetter)
      .subscribe(data => {
          this.oNewsMessage = data;
          this.f.resetForm();
        },
        error => {
          this.oNewsMessage = error;
        });
  }

  getRandomPost() {
    this.sidebarService.getRandomPost()
      .subscribe(data => {
        this.oRandomPost = data;
      }, error => {
        this.oRandomPost = error;
      });
  }

  getMostViewed() {
    this.sidebarService.getMostViewed()
      .subscribe(data => {
        this.oMostViewed = data;
      }, error => {
        this.oMostViewed = error;
      });
  }

  moreInfo(data) {
    return  data.postName.replace(/\s/g, '-') + '-' + data._id;
  }

  getRecentComment() {
    this.sidebarService.getRecentComment()
      .subscribe(data => {
        this.oRecentComment = data;
      }, error => {
        this.oRecentComment = error;
      });
  }
}
