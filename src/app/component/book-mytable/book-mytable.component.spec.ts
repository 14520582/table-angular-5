import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookMytableComponent } from './book-mytable.component';

describe('BookMytableComponent', () => {
  let component: BookMytableComponent;
  let fixture: ComponentFixture<BookMytableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookMytableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookMytableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
