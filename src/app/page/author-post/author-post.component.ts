import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post/post.service';
import {ActivatedRoute, Router} from '@angular/router';
import { imagePath } from '../../config/constant';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-author-post',
  templateUrl: './author-post.component.html',
  styleUrls: ['./author-post.component.scss']
})
export class AuthorPostComponent implements OnInit {
  oAuthor: any = [];
  imageUrl: any = imagePath;

  constructor(private postService: PostService,
              private route: ActivatedRoute,
              private router: Router,
              private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getAllPostByAuthor(params.author);
      this.postService.getMetaDataByType('RECENT POST');
    });
  }

  getAllPostByAuthor(author) {
    this.spinner.show();
    this.postService.getAllPostByAuthor(author)
      .subscribe(data => {
        this.oAuthor = data;
        this.spinner.hide();
      }, error => {
        this.oAuthor = error;
      });
  }

  moreInfo(data) {
    this.router.navigate(['/blog-info/', (data.postName.replace(/\s/g, '-')) + '-' + data._id]);
  }
}
