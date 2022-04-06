import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeV1Component } from './employee-v1.component';

export const employeeAppv1Routes: Routes = [
  { path: '', component: EmployeeV1Component },
];

@NgModule({
  imports: [RouterModule.forChild(employeeAppv1Routes)],
  exports: [RouterModule],
})
export class EmployeeRoutingModule {}
