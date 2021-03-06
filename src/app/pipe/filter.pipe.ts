/**
 * Custom pipe to filter out the employees according to employeeId.
 */
import { Pipe, PipeTransform } from '@angular/core';
import { EmployeeDetail } from '../models/employee.model';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
/**
 * This method will return the employeeDetails by its employeeId
 *
 */
  transform(employeeData: EmployeeDetail[], query: string, label: string): any {
    if (!employeeData) { return []; }
    if (!query) { return employeeData; }
    if (query === '' || query === null) { return []; }
    return employeeData.filter(e => (e[label] == null ? '' : e[label]).indexOf(query) > -1);
  }

}
