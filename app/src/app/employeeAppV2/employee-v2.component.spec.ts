import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeV1Component } from './employee-v2.component';

describe('EmployeeV1Component', () => {
  let component: EmployeeV1Component;
  let fixture: ComponentFixture<EmployeeV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeeV1Component],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
