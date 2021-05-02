import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post/post.service';
import { Router } from '@angular/router';
import { imagePath } from '../../config/constant';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-react-blog',
  templateUrl: './react-blog.component.html',
  styleUrls: ['./react-blog.component.scss']
})
export class ReactBlogComponent implements OnInit {
  oReactBlog: any = [];
  imageUrl: any = imagePath;

  constructor(private postService: PostService,
              private router: Router,
              private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.postService.getMetaDataByType('REACT');
    this.getAllReactPost();
  }

  getAllReactPost() {
    this.spinner.show();
    this.postService.getAllReactPost()
      .subscribe(data => {
        this.oReactBlog = data;
        this.spinner.hide();
      }, error => {
        this.oReactBlog = error;
      });
  }

  moreInfo(data) {
     return  data.postName.replace(/\s/g, '-') + '-' + data._id;
  }

}
