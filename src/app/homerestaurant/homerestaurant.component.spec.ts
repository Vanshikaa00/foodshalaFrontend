import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomerestaurantComponent } from './homerestaurant.component';

describe('HomerestaurantComponent', () => {
  let component: HomerestaurantComponent;
  let fixture: ComponentFixture<HomerestaurantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomerestaurantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomerestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
