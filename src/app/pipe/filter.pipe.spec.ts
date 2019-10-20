/**
 * Unit Test cases  for custom pipe Filter
 */
import { FilterPipe } from '../pipe/filter.pipe';
import { EmployeeDetail } from '../models/employee.model';
import * as employeeListJson from '../../assets/data/data.json';

describe('FilterPipe', () => {

  const pipe = new FilterPipe();
  const employeeDetails: EmployeeDetail[] = employeeListJson['default'];
  let searchQuery: string;
  let searchLabel: string;

  it(`create an instance of 'Filter Pipe'`, () => {
    expect(pipe).toBeTruthy();
  });

  it(`should return null if there are 'no items'`, () => {
    expect(pipe.transform([], searchQuery, searchLabel)).toEqual([]);
  });

  it('should return filtered value', () => {
    searchQuery = '80-255';
    searchLabel = 'employeeId';
    expect(pipe.transform(employeeDetails, searchQuery, searchLabel)).toEqual([{
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
    }]);
  });

  it(`should return complete list of employees if search query is 'null/not provided'`, () => {
    searchQuery = '';
    searchLabel = 'someDummyLabel';

    expect(pipe.transform(employeeDetails, searchQuery, searchLabel)).toEqual(employeeDetails);
  });

  it('should return null when label is dummy', () => {
    searchQuery = '80-';
    searchLabel = 'someDummyLabel';
    expect(pipe.transform(employeeDetails, searchQuery, searchLabel)).toEqual([]);
  });

});
