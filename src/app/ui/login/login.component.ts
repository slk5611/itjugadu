import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {PostService} from '../../services/post/post.service';
import {AuthService} from '../../services/auth/auth.service';
import { imagePath } from '../../config/constant';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('f') f: NgForm;

  oLogin: any = {};
  oLatestPost: any = [];
  loginMessage: any = '';
  imageUrl: any = imagePath;
  previousUrl: any;

  constructor(private postService: PostService,
              private authService: AuthService,
              private location: Location) {}

  ngOnInit() {
    this.getAllLatestPost();
  }

  goBack() {
    this.location.back();
  }

  getAllLatestPost() {
    this.postService.getAllPost()
      .subscribe(data => {
        this.oLatestPost = data;
      }, error => {
        this.oLatestPost = error;
      });
  }


  loginUser() {
    this.authService.loginUser(this.oLogin)
      .subscribe(data => {
        this.loginMessage = data;
        if (this.loginMessage.statusCode === 200 && this.loginMessage.token) {
          this.f.resetForm();
          this.authService.setUser(this.loginMessage.user.firstName, this.loginMessage.user._id);
          this.goBack();
        }
      }, error => {
        this.loginMessage = error;
      });
  }

  moreInfo(data) {
    return  data.postName.replace(/\s/g, '-') + '-' + data._id;
  }
}
