import { Component, OnInit } from '@angular/core';
import {imagePath} from '../../config/constant';
import {PostService} from '../../services/post/post.service';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-typescript',
  templateUrl: './typescript-blog.component.html',
  styleUrls: ['./typescript-blog.component.scss']
})
export class TypescriptBlogComponent implements OnInit {
  oTypescriptBlog: any = [];
  imageUrl: any = imagePath;
  constructor(private postService: PostService,
              private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.postService.getMetaDataByType('TYPESCRIPT');
    this.getAllTypescriptBlogPost();
  }

  getAllTypescriptBlogPost() {
    this.spinner.show();
    this.postService.getAllTypescriptBlogPost()
      .subscribe(data => {
        this.oTypescriptBlog = data;
        this.spinner.hide();
      }, error => {
        this.oTypescriptBlog = error;
      });
  }

  moreInfo(data) {
    return  data.postName.replace(/\s/g, '-') + '-' + data._id;
  }
}
