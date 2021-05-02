import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post/post.service';
import { Router } from '@angular/router';
import {Subscription} from 'rxjs';
import { imagePath } from '../../config/constant';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  oLatestPost: any = [];
  oTestingBlog: any = [];
  oHtmlCss: any = [];
  oNode: any = [];
  oAngular: any = [];
  oReactBlog: any = [];
  oVuePhp: any = [];
  oRandomPost: any = [];
  sub: Subscription;
  imageUrl: any = imagePath;

  constructor(private postService: PostService,
              private router: Router,
              private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.postService.getMetaDataByType('HOME');
    this.getLatestNews();
    this.getAllTestingBlogPost();
    this.getAllHtmlCssPost();
    this.getAllNodePost();
    this.getAllHtmlCssPost();
    this.getAllAngularPost();
    this.getAllReactPost();
    this.getAllVuePhpPost();
    this.getRandomPost();
  }

  // formatting the URL for blog-info route
  moreInfo(data) {
    return  data.postName.replace(/\s/g, '-') + '-' + data._id;
  }

  /**
   *  This function created because some first record of array will not get.
   *  when load so it will give error in console it's just for safe side so when full load will done it will work well.
   */
  moreInfoData(postName, id) {
    if (postName && id) {
      return postName.replace(/\s/g, '-') + '-' + id;
    }
  }

  getLatestNews() {
    this.spinner.show();
    this.postService.getAllPost()
      .subscribe(data =>  {
        this.oLatestPost = data;
        this.spinner.hide();
      }, error => {
        this.oLatestPost = error;
      });
  }

  getAllTestingBlogPost() {
    this.spinner.show();
    this.postService.getAllTestingBlogPost()
      .subscribe(data => {
        this.oTestingBlog = data;
        this.spinner.hide();
      }, error => {
        this.oTestingBlog = error;
      });
  }

  getAllHtmlCssPost() {
    this.postService.getAllHtmlCssPost()
      .subscribe(data => {
        this.oHtmlCss = data;
      }, error => {
        this.oHtmlCss = error;
      });
  }

  getAllNodePost() {
    this.postService.getAllNodePost()
      .subscribe(data => {
        this.oNode = data;
      }, error => {
        this.oNode = error;
      });
  }

  getAllAngularPost() {
    return this.postService.getAllAngularPost()
      .subscribe(data => {
        this.oAngular = data;
      }, error => {
        this.oAngular = error;
      });
  }

  getAllReactPost() {
    this.postService.getAllReactPost()
      .subscribe(data => {
        this.oReactBlog = data;
      }, error => {
        this.oReactBlog = error;
      });
  }

  getRandomPost() {
    this.spinner.show();
    this.postService.getRandomPost()
      .subscribe(data => {
        this.oRandomPost = data;
        setTimeout(() => {
          /** spinner ends after 2 seconds */
          this.spinner.hide();
        }, 2000);
      }, error => {
        this.oRandomPost = error;
      });
  }


  getAllVuePhpPost() {
    this.postService.getAllVuePhpPost()
      .subscribe(data => {
        this.oVuePhp = data;
      }, error => {
        this.oVuePhp = error;
      });
  }
}
