import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeV1Module } from './employeeAppV1/module/employee-v1.module';
import { EmployeeDashboardComponent } from './employeeAppV1/pages/employee-dashboard/employee-dashboard.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [EmployeeV1Module],
})
export class AppModule {}
