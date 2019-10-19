/**
 * This Class is the custom service for Employee related operations
 */

import * as employeeDetailsListJson from '../../assets/data/data.json';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { EmployeeDetail } from '../models/employee.model.js';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {
  private employeeDetailsList: Observable<EmployeeDetail[]>;
  private _httpUrl:string="../../assets/data/data.json";
  
  constructor(private http:HttpClient) { }
  /**
   * This method returns all the employee details records present in the data.json
   */
  public getAllEmployeeDetails(): Observable<EmployeeDetail[]> {
    return this.http.get<EmployeeDetail[]>(this._httpUrl)
  }
  /**
   * This method filter out and return the employee on the basis of its employeeId
   * @param empId 
   */
  public getEmployeeDetailsById(empId: string): Observable<EmployeeDetail> {
    this.employeeDetailsList = this.getAllEmployeeDetails();
    return this.employeeDetailsList.pipe(
      map((value) => value.find(empDetail => empDetail.employeeId === empId)));
  }
}
