import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeModel } from '../../service/employeeV1-model';
import { EmployeeV1Service } from '../../service/employee-v1.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
})
export class EmployeeFormComponent implements OnInit {
  employeeForm!: FormGroup;
  employeeModelObj: EmployeeModel = new EmployeeModel();

  constructor(private fb: FormBuilder, public service: EmployeeV1Service) {}

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: [''],
      salary: [''],
      // address: this.fb.group({
      //   street: [''],
      //   city: [''],
      //   state: [''],
      //   zip: [''],
      // }),
    });
  }

  onSubmit() {
    console.log(this.employeeForm.value);
  }

  postEmployeeDetails() {
    this.employeeModelObj.firstName = this.employeeForm.value.firstName;
    this.employeeModelObj.lastName = this.employeeForm.value.lastName;
    this.employeeModelObj.email = this.employeeForm.value.email;
    this.employeeModelObj.salary = this.employeeForm.value.salary;
    this.service.postEmployee(this.employeeModelObj).subscribe(() => {
      alert('employee added successfully');
    });
  }
}
