import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  form: FormGroup;
  employees: Employee[];

  constructor(private employeeService: EmployeeService,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.initForm();
    this.employeeService.getEmployees().subscribe(e => {this.employees = e.data})
  }

  private initForm(): void {
    this.form = this.fb.group({ // TODO: Add validations
      id: ['', Validators.compose([Validators.required, Validators.pattern("[0-9]+")])],
      name: ['', Validators.compose([Validators.required, Validators.pattern("[a-zA-Z ]+")])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      avatar: ['', Validators.required]
    });
  }

  addEmployee(): void {
    let employee = new Employee();
    employee.id = this.form.value.id
    employee.first_name = this.form.value.name.split(' ')[0]
    employee.last_name = this.form.value.name.split(' ')[1]
    employee.email = this.form.value.email
    employee.avatar = this.form.value.avatar
    this.employees.push(employee);
    this.initForm();
    // TODO: Add an employee to the table

  }

  deleteEmployee(employee: Employee): void {
    this.employees = this.employees.filter(e => e !== employee)

    // TODO: Delete an employee from the table
  }
}
