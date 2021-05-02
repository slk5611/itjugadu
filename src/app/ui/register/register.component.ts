import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { PostService} from '../../services/post/post.service';
import { imagePath } from '../../config/constant';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @ViewChild('f') f: NgForm;

  oRegister: any = {};
  registerMessage: any = '';
  oLatestPost: any = [];
  imageUrl: any = imagePath;
  constructor(private authService: AuthService,
              private postService: PostService) { }

  ngOnInit() {
    this.getAllLatestPost();
  }

  getAllLatestPost() {
    this.postService.getAllPost()
      .subscribe(data => {
        this.oLatestPost = data;
      }, error => {
        this.oLatestPost = error;
      });
  }

  registerUser() {
    this.oRegister.role = 'admin';
    this.authService.registerUser(this.oRegister)
      .subscribe(data => {
        this.registerMessage = data;
        if (this.registerMessage.statusCode !== 409) {
          this.f.resetForm();
        }
      }, error => {
        this.registerMessage = error.error;
      });
  }

  moreInfo(data) {
    return  data.postName.replace(/\s/g, '-') + '-' + data._id;
  }
}
