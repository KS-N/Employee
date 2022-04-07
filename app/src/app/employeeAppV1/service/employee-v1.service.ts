import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EmployeeV1Service {
  constructor(private http: HttpClient) {}

  postEmployee(inputData: any) {
    return this.http.post<any>('http://localhost:3000/posts', inputData).pipe(
      map((formData: any) => {
        return formData;
      })
    );
  }

  getEmployee() {
    return this.http.get<any>('http://localhost:3000/posts').pipe(
      map((formData: any) => {
        return formData;
      })
    );
  }

  updateEmployee(data: any, id: number) {
    return this.http.get<any>('http://localhost:3000/posts' + id, data).pipe(
      map((formData: any) => {
        return formData;
      })
    );
  }

  deleteEmployee(id: number) {
    return this.http.get<any>('http://localhost:3000/posts' + id).pipe(
      map((formData: any) => {
        return formData;
      })
    );
  }
}
