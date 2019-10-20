/**
 * Unit Testing for the custom component employee-list
 */
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { BarRatingModule } from 'ngx-bar-rating';
import { NgxPaginationModule } from 'ngx-pagination';
import * as employeeListJson from '../../assets/data/data.json';
import { FilterPipe } from '../pipe/filter.pipe';
import { EmployeeService } from '../services/employee.service';
import { EmployeeListComponent } from './employee-list.component';
import { of } from 'rxjs';


describe('EmployeeListComponent', () => {
  let component: EmployeeListComponent;
  let fixture: ComponentFixture<EmployeeListComponent>;
  let employeeService: EmployeeService;



  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeListComponent,
        FilterPipe],
      imports: [
        HttpClientTestingModule,
        FormsModule,
        RouterTestingModule,
        NgxPaginationModule,
        BarRatingModule
      ],
      providers: [EmployeeService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    employeeService = fixture.debugElement.injector.get(EmployeeService);
  });

  afterEach(() => fixture.destroy());

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have panel heading as 'Employee List'`, () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div.panel-heading').textContent).toContain('Employee List');
  });

  it('should invoke EmployeeService in the component', () => {
    const empService = fixture.debugElement.injector.get(EmployeeService);
    const employeeListFirst = employeeListJson['default'][0];
    empService.getAllEmployeeDetails().subscribe((result) => expect(result[0]).toEqual(employeeListFirst));
  });

  it('should invoke navigate to the Employee Details Page', () => {
    component.navigateToEmployeeDetails('80-249890');
  });

});
