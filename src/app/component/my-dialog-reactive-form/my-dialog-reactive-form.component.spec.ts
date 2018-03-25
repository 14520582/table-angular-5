import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDialogReactiveFormComponent } from './my-dialog-reactive-form.component';

describe('MyDialogReactiveFormComponent', () => {
  let component: MyDialogReactiveFormComponent;
  let fixture: ComponentFixture<MyDialogReactiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDialogReactiveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDialogReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
