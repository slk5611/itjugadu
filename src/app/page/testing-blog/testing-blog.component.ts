import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post/post.service';
import { imagePath } from '../../config/constant';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-testing-blog',
  templateUrl: './testing-blog.component.html',
  styleUrls: ['./testing-blog.component.scss']
})
export class TestingBlogComponent implements OnInit {
  oTestingBlog: any = [];
  imageUrl: any = imagePath;
  constructor(private postService: PostService,
              private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.postService.getMetaDataByType('TESTING');
    this.getAllTestingBlogPost();
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

  moreInfo(data) {
    return  data.postName.replace(/\s/g, '-') + '-' + data._id;
  }
}
