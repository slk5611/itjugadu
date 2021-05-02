import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptBlogComponent } from './javascript-blog.component';

describe('JavascriptBlogComponent', () => {
  let component: JavascriptBlogComponent;
  let fixture: ComponentFixture<JavascriptBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JavascriptBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavascriptBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
