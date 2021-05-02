import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularBlogComponent } from './angular-blog.component';

describe('AngularComponent', () => {
  let component: AngularBlogComponent;
  let fixture: ComponentFixture<AngularBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
