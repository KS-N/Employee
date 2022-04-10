import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeFormComponent } from '../components/employee-form/employee-form.component';
import { EmployeeRoutingModule } from './employee-v1-routing.module';
import { EmployeeV1Component } from '../employee-v1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeSearchComponent } from '../components/employee-search/employee-search.component';
import { RouterModule } from '@angular/router';
import { EmployeeDashboardComponent } from '../pages/employee-dashboard/employee-dashboard.component';
import { EmployeeCardDashboardComponent } from '../pages/home-dashboard/employee-card-dashboard.component';

@NgModule({
  declarations: [
    EmployeeV1Component,
    EmployeeFormComponent,
    EmployeeSearchComponent,
    EmployeeDashboardComponent,
    EmployeeCardDashboardComponent,
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
})
export class EmployeeV1Module {}
