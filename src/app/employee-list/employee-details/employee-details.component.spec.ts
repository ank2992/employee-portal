/**
 * Unit test cases for custom component employee-details
 */
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { BarRatingModule } from 'ngx-bar-rating';
import { EmployeeService } from 'src/app/services/employee.service';
import { EmployeeDetailsComponent } from './employee-details.component';
import * as employeeListJson from '../../../assets/data/data.json';
import { EmployeeDetail } from 'src/app/models/employee.model';

describe('EmployeeDetailsComponent', () => {

  let component: EmployeeDetailsComponent;
  let fixture: ComponentFixture<EmployeeDetailsComponent>;
  let employeeService: EmployeeService;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        FormsModule,
        BarRatingModule,
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [EmployeeDetailsComponent],

      providers: [EmployeeService,
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { params: { id: '80-2558669' } } }
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDetailsComponent);
    component = fixture.componentInstance;
    employeeService = fixture.debugElement.injector.get(EmployeeService);
  });

  it('should create the Employee-Details component', () => {
    expect(component).toBeTruthy();
  });

  it(`should have the panel header as 'Employee Details'`, () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div.panel-heading').textContent).toContain('Employee Details');
  });

  // it(`should create the panel header for 'Personal Information'`, () => {
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('div.panel-heading.personal-info').textContent).toContain('Personal Information');
  // });

// //   it(`should create the panel header for ' Work Information'`, () => {
// //     const compiled = fixture.debugElement.nativeElement;
// //     expect(compiled.querySelector('div.panel-heading.work-info').textContent).toContain('Work Information');
// //   });

//   it(`should create the panel header for 'Performance Information'`, () => {
//     const compiled = fixture.debugElement.nativeElement;
//     expect(compiled.querySelector('div.panel-heading.performance-info').textContent).toContain('Performance');
//   });

  it(`should invoke the 'Employee Service'`, () => {
    const employeeListFirst = employeeListJson['default'][0];
    component.isDetailsFetched = false;
    employeeService.getEmployeeDetailsById(employeeListFirst.employeeId).subscribe((result) =>
     expect(result).toEqual(employeeListFirst));
  });

  it('should toggle the rating flag ', () => {
    component.notificationFlag = false;
    expect(component.updateRating());
  });

});
