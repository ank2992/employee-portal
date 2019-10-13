/**
 * This Class is the custom service for Employee related operations
 */
import { EmployeeDetail } from './employee-details/employee.model';
import * as employeeDetailsListJson from '../../assets/data/data.json';

export class EmployeeService {
  public employeeDetailsList: EmployeeDetail[];
  constructor() { }
  /**
   * This method returns all the employee details records present in the data.json
   */
  getAllEmployeeDetails(): EmployeeDetail[] {
    return employeeDetailsListJson['default'];
  }
  /**
   * This method filter out and return the employee on the basis of its employeeId
   * @param empId 
   */
  getEmployeeDetailsById(empId: string): EmployeeDetail {
    this.employeeDetailsList = this.getAllEmployeeDetails();
    return this.employeeDetailsList.find(empDetail => empDetail.employeeId === empId);
  }
}
