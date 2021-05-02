import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post/post.service';
import { imagePath } from '../../config/constant';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-html-css-blog',
  templateUrl: './html-css-blog.component.html',
  styleUrls: ['./html-css-blog.component.scss']
})
export class HtmlCssBlogComponent implements OnInit {
  oHtmlCss: any = [];
  imageUrl: any = imagePath;
  constructor(private postService: PostService,
              private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.postService.getMetaDataByType('HTML CSS');
    this.getAllHtmlCssPost();
  }

  getAllHtmlCssPost() {
    this.spinner.show();
    this.postService.getAllHtmlCssPost()
      .subscribe(data => {
        this.oHtmlCss = data;
        this.spinner.hide();
      }, error => {
        this.oHtmlCss = error;
      });
  }

  moreInfo(data) {
    return  data.postName.replace(/\s/g, '-') + '-' + data._id;
  }
}
