/**
 * Unit testing for the custom service EmployeeService
 */

import * as employeeListJson from '../../assets/data/data.json';
import { EmployeeService } from '../services/employee.service';
import { EmployeeDetail } from '../models/employee.model.js';
import { of } from 'rxjs';

describe('EmployeeService', () => {

  let employeesService: EmployeeService;
  let httpClientSpy: { get: jasmine.Spy };
  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    employeesService = new EmployeeService(<any> httpClientSpy);

  });

  it('should start the Employee Service', () => {
    expect(employeesService).toBeTruthy;
  });

  it(`should fetch the complete Employee list when 'getAllEmployeeDetails() is invoked'`, () => {
    const employeeList: EmployeeDetail[] = employeeListJson['default'];
    httpClientSpy.get.and.returnValue(of(employeeList));
    employeesService.getAllEmployeeDetails().subscribe((result) => expect(result).toEqual(employeeList));
  });

  it('should fetch the Employee details based on employeeId ', () => {
    const employeeId = '80-2558669';
    const employeeList: EmployeeDetail[] = employeeListJson['default'];
    httpClientSpy.get.and.returnValue(of(employeeList));
    employeesService.getEmployeeDetailsById(employeeId).subscribe((result) => expect(result).toEqual(employeeList[0]));
  });
});
