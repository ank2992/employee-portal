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
  public empId:string;
  public ratings:number;
  public notificationFlag:boolean=false;

  constructor(private router: Router, private activeRoute: ActivatedRoute, private employeeService: EmployeeService) { }

  ngOnInit() {
    this.empId=this.activeRoute.snapshot.params['id'];
    this.employeeDetails=this.employeeService.getEmployeeDetailsById(this.empId);
    this.ratings=this.employeeDetails['rating'];
    console.log("emp detail",this.employeeDetails);
    console.log("emp detail",this.ratings);
  }
  updateRating(){
    this.notificationFlag= true;    
  }
}
