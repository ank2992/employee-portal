/**
 * This class is the custom component which holds all the list of employee details
 */
import { Component, OnInit, OnDestroy } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { EmployeeDetail } from '../models/employee.model';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],

})
export class EmployeeListComponent implements OnInit, OnDestroy {

  private employeeListSubscription: Subscription;
  public employeeList: EmployeeDetail[];
  public pageNumber: number = 1;
  constructor(private employeeService: EmployeeService, private router: Router) { }
/**
 * In the ngOnInit event, the observable to get the employee details is subscribed
 */  ngOnInit() {
    this.employeeListSubscription = this.employeeService.getAllEmployeeDetails().subscribe((value) => {
      this.employeeList = value;
    });
  }
/**
 *  This method will navigate the to the employee details page of the clicked employee
 * @param employeeId 
 */  navigateToEmployeeDetails(employeeId: number) {
    this.router.navigate(['/employee-details', employeeId]);
  }
  /**
   *unsubscribed the get employees list Observable
   */  ngOnDestroy(): void {
    this.employeeListSubscription.unsubscribe();
  }
}