import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeBlogComponent } from './node-blog.component';

describe('NodeComponent', () => {
  let component: NodeBlogComponent;
  let fixture: ComponentFixture<NodeBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodeBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
