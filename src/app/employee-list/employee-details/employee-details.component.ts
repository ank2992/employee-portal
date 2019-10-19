/**
 *This is the custom component for employee-details 
 */
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { EmployeeDetail } from '../../models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit, OnDestroy {

  private employeeDetailsSubscription: Subscription;
  public employeeDetails: EmployeeDetail;
  public empId: string;
  public ratings: number;
  public notificationFlag: boolean = false;
  public isDetailsFetched = false;
  constructor(private activeRoute: ActivatedRoute, private employeeService: EmployeeService) {}
  /**
   * This methos will get the employee-id from the path parameter, to get the details about that employee,
 *also it will take the current path parameter employeeId and will pass it as a parameter to the
*observable
   */
  ngOnInit():void {
    this.isDetailsFetched = false;
    this.employeeDetailsSubscription = this.activeRoute.params.subscribe(
      (params: Params) => {
        this.empId = params['id']
      }
    );
    this.employeeService.getEmployeeDetailsById(this.empId).subscribe((value) => {
      this.employeeDetails = value;
      this.isDetailsFetched = true;
      this.ratings = this.employeeDetails['rating'];
    })

  }
  /**
   * this method updates the rating flag
   */
  updateRating():void {
    this.notificationFlag = true;
  }
/**
 * unsubscribed get details of employee observable
 */  ngOnDestroy(): void {
    this.employeeDetailsSubscription.unsubscribe;
  }
}
