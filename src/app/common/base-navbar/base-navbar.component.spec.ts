import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseNavbarComponent } from './base-navbar.component';

describe('BaseNavbarComponent', () => {
  let component: BaseNavbarComponent;
  let fixture: ComponentFixture<BaseNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
