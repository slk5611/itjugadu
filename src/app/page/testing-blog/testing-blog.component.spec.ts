import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingBlogComponent } from './testing-blog.component';

describe('TestingBlogComponent', () => {
  let component: TestingBlogComponent;
  let fixture: ComponentFixture<TestingBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestingBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
