import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingpagemenuComponent } from './landingpagemenu.component';

describe('LandingpagemenuComponent', () => {
  let component: LandingpagemenuComponent;
  let fixture: ComponentFixture<LandingpagemenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingpagemenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingpagemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
