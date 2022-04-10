import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeV1Component } from '../employee-v1.component';
import { EmployeeDashboardComponent } from '../pages/employee-dashboard/employee-dashboard.component';
import { EmployeeCardDashboardComponent } from '../pages/home-dashboard/employee-card-dashboard.component';

export const employeeAppv1Routes: Routes = [
  {
    path: '',
    component: EmployeeV1Component,
    children: [
      {
        path: 'home-dashboard',
        component: EmployeeCardDashboardComponent,
      },
      {
        path: 'employee-dashboard',
        component: EmployeeDashboardComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(employeeAppv1Routes)],
  exports: [RouterModule],
})
export class EmployeeRoutingModule {}
