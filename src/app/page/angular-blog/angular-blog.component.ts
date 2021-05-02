import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post/post.service';
import {Router} from '@angular/router';
import { imagePath } from '../../config/constant';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-angular-blog',
  templateUrl: './angular-blog.component.html',
  styleUrls: ['./angular-blog.component.scss']
})
export class AngularBlogComponent implements OnInit {
  oAngular: any = [];
  imageUrl: any = imagePath;
  constructor(private postService: PostService,
              private router: Router,
              private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.postService.getMetaDataByType('ANGULAR');
    this.getAllAngularPost();
  }

  getAllAngularPost() {
    this.spinner.show();
    return this.postService.getAllAngularPost()
      .subscribe(data => {
        this.oAngular = data;
        this.spinner.hide();
      }, error => {
        this.oAngular = error;
      });
  }

  moreInfo(data) {
    return  data.postName.replace(/\s/g, '-') + '-' + data._id;
  }
}
