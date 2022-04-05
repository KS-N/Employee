import { TestBed } from '@angular/core/testing';

import { EmployeeV1Service } from './employee-v1.service';

describe('EmployeeV1Service', () => {
  let service: EmployeeV1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeV1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
