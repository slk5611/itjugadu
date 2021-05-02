import { Component, OnInit } from '@angular/core';
import {imagePath} from '../../config/constant';
import {PostService} from '../../services/post/post.service';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-javascript-blog',
  templateUrl: './javascript-blog.component.html',
  styleUrls: ['./javascript-blog.component.scss']
})
export class JavascriptBlogComponent implements OnInit {
  oJavascriptBlog: any = [];
  imageUrl: any = imagePath;
  constructor(private postService: PostService,
              private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.postService.getMetaDataByType('JAVASCRIPT');
    this.getAllJavascriptBlogPost();
  }

  getAllJavascriptBlogPost() {
    this.spinner.show();
    this.postService.getAllJavascriptBlogPost()
      .subscribe(data => {
        this.oJavascriptBlog = data;
        this.spinner.hide();
      }, error => {
        this.oJavascriptBlog = error;
      });
  }

  moreInfo(data) {
    return  data.postName.replace(/\s/g, '-') + '-' + data._id;
  }
}
