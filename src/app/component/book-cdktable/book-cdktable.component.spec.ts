import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCdktableComponent } from './book-cdktable.component';

describe('BookCdktableComponent', () => {
  let component: BookCdktableComponent;
  let fixture: ComponentFixture<BookCdktableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookCdktableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookCdktableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
