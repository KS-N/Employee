import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-v1',
  templateUrl: './employee-v1.component.html',
  styleUrls: ['./employee-v1.component.scss'],
})
export class EmployeeV1Component implements OnInit {
  toggleForm = false;
  constructor() {}

  ngOnInit(): void {}

  toggleFormOnClick() {
    this.toggleForm = !this.toggleForm;
  }
}
