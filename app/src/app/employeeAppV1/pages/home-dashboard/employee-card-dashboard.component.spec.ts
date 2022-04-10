import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCardDashboardComponent } from './employee-card-dashboard.component';

describe('EmployeeCardDashboardComponent', () => {
  let component: EmployeeCardDashboardComponent;
  let fixture: ComponentFixture<EmployeeCardDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeCardDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeCardDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
