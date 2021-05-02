import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VuePhpBlogComponent } from './vue-php-blog.component';

describe('VuePhpComponent', () => {
  let component: VuePhpBlogComponent;
  let fixture: ComponentFixture<VuePhpBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VuePhpBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VuePhpBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
