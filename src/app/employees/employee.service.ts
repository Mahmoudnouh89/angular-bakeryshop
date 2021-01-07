import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee';
import { EmployeePage } from './employee-page';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  readonly ROOT_URL = 'https://reqres.in/api/users';
  constructor(private http: HttpClient) {}

  getEmployees(): Observable<any> {

    return this.http.get<EmployeePage>(this.ROOT_URL); // TODO: Load data from backend service
  }
}
