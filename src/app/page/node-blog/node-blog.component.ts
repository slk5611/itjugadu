import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post/post.service';
import { Router } from '@angular/router';
import { imagePath } from '../../config/constant';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-node',
  templateUrl: './node-blog.component.html',
  styleUrls: ['./node-blog.component.scss']
})
export class NodeBlogComponent implements OnInit {
  oNode: any = [];
  imageUrl: any = imagePath;
  constructor(private postService: PostService,
              private router: Router,
              private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.postService.getMetaDataByType('NODE');
    this.getAllNodePost();
  }

  getAllNodePost() {
    this.spinner.show();
    this.postService.getAllNodePost()
      .subscribe(data => {
        this.oNode = data;
        this.spinner.hide();
      }, error => {
        this.oNode = error;
      });
  }

  moreInfo(data) {
    return  data.postName.replace(/\s/g, '-') + '-' + data._id;
  }

}
