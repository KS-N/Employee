import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'employee-app',
    loadChildren: () =>
      import('./employeeAppV1/employee-v1.module').then((m) => {
        m.EmployeeV1Module;
      }),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
