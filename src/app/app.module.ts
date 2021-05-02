import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './ui/header/header.component';
import { FooterComponent } from './ui/footer/footer.component';
import { HomeComponent } from './page/home/home.component';
import { AngularBlogComponent } from './page/angular-blog/angular-blog.component';
import { NodeBlogComponent } from './page/node-blog/node-blog.component';
import { ReactBlogComponent } from './page/react-blog/react-blog.component';
import { HtmlCssBlogComponent } from './page/html-css-blog/html-css-blog.component';
import { VuePhpBlogComponent } from './page/vue-php-blog/vue-php-blog.component';
import { TestingBlogComponent } from './page/testing-blog/testing-blog.component';
import { SidebarComponent } from './ui/sidebar/sidebar.component';
import { ContactComponent } from './page/contact/contact.component';
import { AboutComponent } from './page/about/about.component';
import { LatestPostComponent } from './page/latest-post/latest-post.component';
import { PrivacySecurityComponent } from './page/privacy-security/privacy-security.component';
import { TermConditionComponent } from './page/term-condition/term-condition.component';
import { CookiePolicyComponent } from './page/cookie-policy/cookie-policy.component';
import { DetailInfoComponent } from './page/detail-info/detail-info.component';
import {CommonService} from './services/common/common.service';
import { AuthorPostComponent } from './page/author-post/author-post.component';
import { RegisterComponent } from './ui/register/register.component';
import { LoginComponent } from './ui/login/login.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { TypescriptBlogComponent } from './page/typescript-blog/typescript-blog.component';
import { JavascriptBlogComponent } from './page/javascript-blog/javascript-blog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AngularBlogComponent,
    NodeBlogComponent,
    ReactBlogComponent,
    HtmlCssBlogComponent,
    VuePhpBlogComponent,
    TestingBlogComponent,
    SidebarComponent,
    ContactComponent,
    AboutComponent,
    LatestPostComponent,
    PrivacySecurityComponent,
    TermConditionComponent,
    CookiePolicyComponent,
    DetailInfoComponent,
    AuthorPostComponent,
    RegisterComponent,
    LoginComponent,
    TypescriptBlogComponent,
    JavascriptBlogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxSpinnerModule
  ],
  providers: [ CommonService ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private commonService: CommonService) {}
}
