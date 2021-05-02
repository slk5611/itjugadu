import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post/post.service';
import { imagePath } from '../../config/constant';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-vue-php-blog',
  templateUrl: './vue-php-blog.component.html',
  styleUrls: ['./vue-php-blog.component.scss']
})
export class VuePhpBlogComponent implements OnInit {
  oVuePhp: any = [];
  imageUrl: any = imagePath;
  constructor(private postService: PostService,
              private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.postService.getMetaDataByType('VUEPHP');
    this.getAllVuePhpPost();
  }

  getAllVuePhpPost() {
    this.spinner.show();
    this.postService.getAllVuePhpPost()
      .subscribe(data => {
        this.oVuePhp = data;
        this.spinner.hide();
      }, error => {
        this.oVuePhp = error;
      });
  }
  moreInfo(data) {
    return  data.postName.replace(/\s/g, '-') + '-' + data._id;
  }
}
