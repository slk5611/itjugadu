import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypescriptBlogComponent } from './typescript-blog.component';

describe('TypescriptComponent', () => {
  let component: TypescriptBlogComponent;
  let fixture: ComponentFixture<TypescriptBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypescriptBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypescriptBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
