/**
 * This Class is the custom service for Employee related operations
 */
import { EmployeeDetail } from './employee-details/employee.model';
import * as employeeDetailsListJson from '../../assets/data/data.json';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

export class EmployeeService {
  public employeeDetailsList: Observable<EmployeeDetail[]>;
  constructor() { }
  /**
   * This method returns all the employee details records present in the data.json
   */
  getAllEmployeeDetails(): Observable<EmployeeDetail[]> {
    return of(employeeDetailsListJson['default']);
  }
  /**
   * This method filter out and return the employee on the basis of its employeeId
   * @param empId 
   */
  getEmployeeDetailsById(empId: string): Observable<EmployeeDetail> {
    this.employeeDetailsList = this.getAllEmployeeDetails();
    return this.employeeDetailsList.pipe(
      map((value)=>value.find(empDetail => empDetail.employeeId === empId)));
  }
}
