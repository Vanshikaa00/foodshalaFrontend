import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewitemComponent } from './addnewitem.component';

describe('AddnewitemComponent', () => {
  let component: AddnewitemComponent;
  let fixture: ComponentFixture<AddnewitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddnewitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
