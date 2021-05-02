import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { webUri } from '../../config/constant';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  webUri: any = webUri;

  constructor(private http: HttpClient) {
  }

  addNewsLetter(data) {
    return this.http.post(this.webUri + '/newsletters', data);
  }

  /**
   * Get RandomPost
   * @return Object {RandomPost}
   */
  getRandomPost() {
    return this.http.get(this.webUri + '/posts/randompost');
  }

  /**
   * Get MostViewed
   * @return Object {MostViewed}
   */
  getMostViewed() {
    return this.http.get(this.webUri + '/posts/mostviewed');
  }

  /**
   * Get RecentComment
   * @return Object {RecentComment}
   */
  getRecentComment() {
    return this.http.get(this.webUri + '/comments/recentcomment/comment');
  }
}


