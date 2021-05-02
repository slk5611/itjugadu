import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './page/home/home.component';
import {HtmlCssBlogComponent} from './page/html-css-blog/html-css-blog.component';
import {AngularBlogComponent} from './page/angular-blog/angular-blog.component';
import {ReactBlogComponent} from './page/react-blog/react-blog.component';
import {VuePhpBlogComponent} from './page/vue-php-blog/vue-php-blog.component';
import {NodeBlogComponent} from './page/node-blog/node-blog.component';
import {TestingBlogComponent} from './page/testing-blog/testing-blog.component';
import {AboutComponent} from './page/about/about.component';
import {ContactComponent} from './page/contact/contact.component';
import {LatestPostComponent} from './page/latest-post/latest-post.component';
import {CookiePolicyComponent} from './page/cookie-policy/cookie-policy.component';
import {TermConditionComponent} from './page/term-condition/term-condition.component';
import {PrivacySecurityComponent} from './page/privacy-security/privacy-security.component';
import {DetailInfoComponent} from './page/detail-info/detail-info.component';
import {AuthorPostComponent} from './page/author-post/author-post.component';
import {RegisterComponent} from './ui/register/register.component';
import {LoginComponent} from './ui/login/login.component';
import {TypescriptBlogComponent} from './page/typescript-blog/typescript-blog.component';
import {JavascriptBlogComponent} from './page/javascript-blog/javascript-blog.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'html-css', component: HtmlCssBlogComponent},
  {path: 'angular', component: AngularBlogComponent},
  {path: 'react-blog', component: ReactBlogComponent},
  {path: 'vue-php', component: VuePhpBlogComponent}, // SPORTS
  {path: 'node', component: NodeBlogComponent},
  {path: 'testing-blog', component: TestingBlogComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'latest-post', component: LatestPostComponent},
  {path: 'cookie-policy', component: CookiePolicyComponent},
  {path: 'term-condition', component: TermConditionComponent},
  {path: 'privacy-security', component: PrivacySecurityComponent},
  {path: 'blog-info/:data', component: DetailInfoComponent},
  {path: 'author/:author', component: AuthorPostComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'typescript-blog', component: TypescriptBlogComponent},
  {path: 'javascript-blog', component: JavascriptBlogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})

export class AppRoutingModule {
}

