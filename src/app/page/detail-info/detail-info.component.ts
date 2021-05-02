import { Component, OnInit, ViewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../../services/post/post.service';
import { imagePath } from '../../config/constant';
import { AuthService } from '../../services/auth/auth.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-detail-info',
  templateUrl: './detail-info.component.html',
  styleUrls: ['./detail-info.component.scss']
})
export class DetailInfoComponent implements OnInit {
  @ViewChild('f') f: NgForm;

  viewData: any = [];
  currentUrl = '';
  oRecommendedPost: any = [];
  imageUrl: any = imagePath;
  oCommentData: any = [];
  oComment: any = {};
  loginMessage = '';
  postId: any = '';
  constructor(private route: ActivatedRoute,
              private postService: PostService,
              private router: Router,
              private authService: AuthService,
              private spinner: NgxSpinnerService,
              private title: Title,
              private meta: Meta) {}

  ngOnInit(): void {
     this.currentUrl = this.router.url;
     this.route.params.subscribe(params => {
      const data = params.data;
      this.postId = data.substr(data.length - 24);
      this.getPostDetailById(this.postId);
      this.getCommentByPost(this.postId);
     });
  }

  getPostDetailById(id) {
    this.spinner.show();
    this.postService.getPostDetailById(id).subscribe(data => {
      this.viewData = data[0];
      this.title.setTitle(this.viewData.postName);
      this.meta.updateTag({name: 'description', content: this.viewData.postName});
      this.meta.updateTag({name: 'keywords', content: this.viewData.metaTag});
      this.spinner.hide();

      // Get post by postType what user now reading related to that Recommended
      this.postService.getRecommendedPost(this.viewData.postType).subscribe(recommended => {
        this.oRecommendedPost = recommended;
      });
    }, error => {
      this.viewData = error;
    });
  }

  moreInfo(data) {
    return  data.postName.replace(/\s/g, '-') + '-' + data._id;
  }

  addComment() {
      if (this.authService.isLogged()) {
        this.oComment.posts = this.postId;
        this.oComment.users = this.authService.getUser().code;
        this.postService.addComment(this.oComment).subscribe(data => {
          this.oCommentData = data;
          this.f.resetForm();
          this.getCommentByPost(this.postId);
        }, error => {
          this.oCommentData = error;
        });
      } else {
         this.loginMessage = 'Please Login first to continue comment';
      }
  }

  getCommentByPost(id) {
    this.postService.getCommentByPost(id).subscribe(data => {
      this.oCommentData = data;
    }, error => {
      this.oCommentData = error;
    });
  }
}
