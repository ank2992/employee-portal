import { Pipe, PipeTransform } from '@angular/core';
import { EmployeeDetail } from './employee-list/employee-details/employee.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(employeeData: EmployeeDetail[],query:string,label:string): any {
  if(!employeeData){ return null;}
  if(!query){return employeeData;}
  if(query===''|| query===null){ return []}
  return employeeData.filter(e => (e[label] == null ? '' : e[label]).indexOf(query) > -1);
  }

}
