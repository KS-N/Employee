import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeCardComponent } from '../components/employee-card/employee-card.component';
import { EmployeeFormComponent } from '../components/employee-form/employee-form.component';
import { EmployeeRoutingModule } from './employee-v1-routing.module';
import { EmployeeV1Component } from '../employee-v1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeSearchComponent } from '../components/employee-search/employee-search.component';
import { EmployeeCardDashboardComponent } from '../pages/employee-card-dashboard/employee-card-dashboard.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    EmployeeV1Component,
    EmployeeCardComponent,
    EmployeeFormComponent,
    EmployeeSearchComponent,
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
