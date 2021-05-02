import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactBlogComponent } from './react-blog.component';

describe('ReactBlogComponent', () => {
  let component: ReactBlogComponent;
  let fixture: ComponentFixture<ReactBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
