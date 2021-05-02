import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post/post.service';
import { imagePath } from '../../config/constant';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  oRecentPost: any =  [];
  oPopularPost: any = [];
  oPostCount: any = [];
  imageUrl: any = imagePath;
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getRecentPost();
    this.getPopularPost();
    this.getPostCount();
  }

  getRecentPost() {
    this.postService.getAllPost()
      .subscribe(data => {
        this.oRecentPost = data;
      }, error => {
        this.oRecentPost = error;
      });
  }

  getPopularPost() {
    this.postService.getRandomPost()
      .subscribe(data => {
        this.oPopularPost = data;
      }, error => {
        this.oPopularPost = error
        ;
      });
  }

  moreInfo(data) {
    return  data.postName.replace(/\s/g, '-') + '-' + data._id;
  }

  getPostCount() {
    this.postService.getPostCount()
      .subscribe(data => {
        this.oPostCount = data;
      }, error => {
        this.oPostCount = error;
      });
  }
}
