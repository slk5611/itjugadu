import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post/post.service';
import { imagePath } from '../../config/constant';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-latest-post',
  templateUrl: './latest-post.component.html',
  styleUrls: ['./latest-post.component.scss']
})
export class LatestPostComponent implements OnInit {
  oLatestPost: any = [];
  imageUrl: any = imagePath;
  constructor(private postService: PostService,
              private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.postService.getMetaDataByType('RECENT POST');
    this.getAllLatestPost();
  }

  getAllLatestPost() {
    this.spinner.show();
    this.postService.getAllPost()
      .subscribe(data => {
        this.oLatestPost = data;
        setTimeout(() => {
          /** spinner ends after 2 seconds */
          this.spinner.hide();
        }, 1000);
      }, error => {
        this.oLatestPost = error;
      });
  }

  moreInfo(data) {
    return  data.postName.replace(/\s/g, '-') + '-' + data._id;
  }
}
