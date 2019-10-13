/**
 * This class is the custom component which holds all the list of employee details
 */
import { Component, OnInit } from '@angular/core';
import { EmployeeDetail } from './employee-details/employee.model';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],

})
export class EmployeeListComponent implements OnInit {
  public employeeList: EmployeeDetail[];
  public pageNumber: number = 1;
  public queryEmployeeId: string;
  constructor(private employeeService: EmployeeService) {

  }

  ngOnInit() {
    this.employeeList = this.employeeService.getAllEmployeeDetails();
  }
}