import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlCssBlogComponent } from './html-css-blog.component';

describe('HtmlCssBlogComponent', () => {
  let component: HtmlCssBlogComponent;
  let fixture: ComponentFixture<HtmlCssBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlCssBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlCssBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
