import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-list/employee-details/employee-details.component';
import { EmployeeService } from './employee-list/employee.service';
const appRoutes : Routes=[
{'path':'',component:EmployeeListComponent},
{'path':'employee-details/:id',component:EmployeeDetailsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NgxPaginationModule
  ],
  providers:[EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
