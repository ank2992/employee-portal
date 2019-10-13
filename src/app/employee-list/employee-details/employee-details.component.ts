/**
 *This is the custom component for employee-details 
 */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeDetail } from './employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  public employeeDetails: EmployeeDetail;
  public empId: string;
  public ratings: number;
  public notificationFlag: boolean = false;

  constructor(private router: Router, private activeRoute: ActivatedRoute, private employeeService: EmployeeService) { }
/**
 * This methos will get the employee-id from the path parameter, to get the details about that employee
 */
  ngOnInit() {
    this.empId = this.activeRoute.snapshot.params['id'];
    this.employeeDetails = this.employeeService.getEmployeeDetailsById(this.empId);
    this.ratings = this.employeeDetails['rating'];
  }
  /**
   * this method updates the rating flag
   */
  updateRating() {
    this.notificationFlag = true;
  }
}
