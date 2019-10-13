/**
 * Unit Testing for the custom component employee-list
 */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxPaginationModule } from 'ngx-pagination';
import { EmployeeListComponent } from './employee-list.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { FilterPipe } from '../filter.pipe';
import { EmployeeService } from './employee.service';
import { EmployeeDetail } from './employee-details/employee.model.js';
import { BarRatingModule } from "ngx-bar-rating";

describe('EmployeeListComponent', () => {
  let component: EmployeeListComponent;
  let fixture: ComponentFixture<EmployeeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeListComponent,
        FilterPipe],
      imports: [
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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should have panel heading as 'Employee List'`, () => {
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div.panel-heading').textContent).toContain('Employee List');
  });
  it('should invoke EmployeeService in the component', () => {
    let empService = fixture.debugElement.injector.get(EmployeeService);
    const firstEmployeeRow: EmployeeDetail = {
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
    expect(empService.getAllEmployeeDetails()[0]).toEqual(firstEmployeeRow);
  });

  it(`should populate the table correctly when page size is '1'`, () => {
    component.pageNumber = 1;
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('td').textContent).toContain('Whittlesee');
  });
});
