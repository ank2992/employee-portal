/**
 * Unit test cases for custom component employee-details
 */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeDetailsComponent } from './employee-details.component';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { BarRatingModule } from 'ngx-bar-rating';
import { EmployeeDetail } from './employee.model';

describe('EmployeeDetailsComponent', () => {
  let component: EmployeeDetailsComponent;
  let fixture: ComponentFixture<EmployeeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        BarRatingModule
      ],
      declarations: [EmployeeDetailsComponent],

      providers: [EmployeeService,
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { params: { id: "80-2558669" } } }
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create the Employee-Details component', () => {
    expect(component).toBeTruthy();
  });

  it(`should have the panel header as 'Employee Details'`, () => {
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div.panel-heading').textContent).toContain('Employee Details');
  });

  it(`should create the panel header for 'Personal Information'`, () => {
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div.panel-heading.personal-info').textContent).toContain('Personal Information');
  });

  it(`should create the panel header for ' Work Information'`, () => {
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div.panel-heading.work-info').textContent).toContain('Work Information');
  });

  it(`should create the panel header for 'Performance Information'`, () => {
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div.panel-heading.performance-info').textContent).toContain('Performance');
  });

  it(`should invoke the 'Employee Service'`, () => {
    let employeeService = fixture.debugElement.injector.get(EmployeeService);
    const emailId = component.empId = '80-2558669';
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
    expect(employeeService.getEmployeeDetailsById(emailId)).toEqual(employeeDetails);
  });

  it('should toggle the rating flag ', () => {
    component.notificationFlag = false;
    expect(component.updateRating());
  });

});