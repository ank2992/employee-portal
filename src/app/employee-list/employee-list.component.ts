import { Component, OnInit } from '@angular/core';
import { EmployeeDetail } from './employee-details/employee.model';
import { EmployeeService } from './employee.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
 
})
export class EmployeeListComponent implements OnInit {
  public employeeList:EmployeeDetail[];
  public pageNumber:number=1;
  constructor(private employeeService:EmployeeService,private router:Router,private activeRoute:ActivatedRoute) {

   }

  ngOnInit() {
    this.employeeList=this.employeeService.getAllEmployeeDetails();
  }
}