
import { EmployeeDetail } from './employee-details/employee.model';
import * as employeeDetailsListJson from '../../assets/data/data.json';

export class EmployeeService {
  public employeeDetailsList : EmployeeDetail[] ;
  constructor() { }
  getAllEmployeeDetails():EmployeeDetail[]{
    return employeeDetailsListJson['default'];
  }
  getEmployeeDetailsById(empId : string):EmployeeDetail{
    this.employeeDetailsList=this.getAllEmployeeDetails();
    return this.employeeDetailsList.find(empDetail => empDetail.employeeId === empId);
  }
}
