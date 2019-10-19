/**
 * Unit testing for the custom service EmployeeService
 */

import * as employeeListJson from '../../assets/data/data.json';
import { EmployeeDetail } from './employee-details/employee.model';
import { EmployeeService } from '../services/employee.service.js';

describe('EmployeeService', () => {
  let service: EmployeeService;
  beforeEach(() => {

    service = new EmployeeService();
  });

  it('should start the Employee Service', () => {
    expect(service).toBeTruthy;
  });

  it(`should fetch the complete Employee list when 'getAllEmployeeDetails() is invoked'`, () => {
    let employeeList = employeeListJson['default'];
    service.getAllEmployeeDetails().subscribe((result)=>expect(result).toEqual(employeeList));
  });

  it('should fetch the Employee details based on employeeId ', () => {
    const employeeId = '80-2558669';
    const employeeDetails: EmployeeDetail = {
      employeeId: '80-2558669',
      lastName: 'Whittlesee',
      mobileNumber: '+63 351 975 2383',
      emailId: 'awhittlesee0@spiegel.de',
      gender: 'Female',
      workAddress: '15594 Stang Terrace',
      homeAddress: '4558 Bashford Parkway',
      currentProjectName: 'Tin',
      hobbies: 'Mule deer',
      rating: 3
    };
    service.getEmployeeDetailsById(employeeId).subscribe((result)=>expect(result).toEqual(employeeDetails));
  });
});