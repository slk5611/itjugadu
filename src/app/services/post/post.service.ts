import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { webUri } from '../../config/constant';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  webUri: any = webUri;
  oMetaData: any = [];
  constructor(private http: HttpClient,
              private title: Title,
              private meta: Meta) { }

  /**
   * Get AllHtmlCssPost
   * @return Object {HTML CSS}
   */
  getAllHtmlCssPost() {
    return this.http.get(this.webUri + '/posts/postType/' + 'HTML CSS');
  }

  /**
   * Get AllAngularPost
   * @return Object {ANGULAR}
   */
  getAllAngularPost() {
    return this.http.get(this.webUri + '/posts/postType/' + 'ANGULAR');
  }

  /**
   * Get AllReactPost
   * @return Object {REACT}
   */
  getAllReactPost() {
    return this.http.get(this.webUri + '/posts/postType/' + 'REACT');
  }

  /**
   * Get AllVuePhpPost
   * @return Object {VuePhp}
   */
  getAllVuePhpPost() {
    return this.http.get(this.webUri + '/posts/postType/' + 'VUEPHP');
  }

  /**
   * Get AllNodePost
   * @return Object {NODE}
   */
  getAllNodePost() {
    return this.http.get(this.webUri + '/posts/postType/' + 'NODE');
  }

  /**
   * Get AllTestingBlogPost
   * @return Object {TESTING Blog}
   */
  getAllTestingBlogPost() {
    return this.http.get(this.webUri + '/posts/postType/' + 'TESTING');
  }

  /**
   * Get AllJavascriptBlogPost
   * @return Object {JAVASCRIPT Blog}
   */
  getAllJavascriptBlogPost() {
    return this.http.get(this.webUri + '/posts/postType/' + 'JAVASCRIPT');
  }

  /**
   * Get AllTypescriptBlogPost
   * @return Object {TYPESCRIPT Blog}
   */
  getAllTypescriptBlogPost() {
    return this.http.get(this.webUri + '/posts/postType/' + 'TYPESCRIPT');
  }

  /**
   * Get AllPost
   * @return Object {Post}
   */
  getAllPost() {
    return this.http.get(this.webUri + '/posts');
  }

  /**
   * Get RandomPost
   * @return Object {RandomPost}
   */
  getRandomPost() {
    return this.http.get(this.webUri + '/posts/randompost');
  }

  /**
   * Get Post By ID
   * @return Object {Post}
   */
  getPostDetailById(id) {
    return this.http.get(this.webUri + '/posts/detailpost/' + id);
  }

  /**
   * Get Post By Author
   * @return Object {Post}
   */
  getAllPostByAuthor(author) {
    return this.http.get(this.webUri + '/posts/author/' + author);
  }

  /**
   * Get Recommended Post
   */
  getRecommendedPost(recommended) {
    return this.http.get(this.webUri + '/posts/recommended/' + recommended);
  }

  /**
   * Get Post Count
   */
  getPostCount() {
    return this.http.get(this.webUri + '/posts/postcount');
  }

  /**
   * Add Comment
   */
  addComment(oComment) {
    return this.http.post(this.webUri + '/comments', oComment);
  }

  /**
   * Get Comment By Post
   */
  getCommentByPost(postId) {
    return this.http.get(this.webUri + '/comments/' + postId);
  }

  getMetaDataByType(postType) {
    this.http.get(this.webUri + '/metadata/posttype/' + postType).subscribe(data => {
      this.oMetaData = data;
      this.title.setTitle(this.oMetaData[0] && this.oMetaData[0].title);
      this.meta.updateTag({name: 'description', content: this.oMetaData[0] && this.oMetaData[0].description});
      this.meta.updateTag({name: 'keywords', content: this.oMetaData[0] && this.oMetaData[0].metaTag});
    }, error => {
      this.oMetaData = error;
    });
  }
}

