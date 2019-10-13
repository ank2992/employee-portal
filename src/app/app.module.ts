import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { BarRatingModule } from "ngx-bar-rating";
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-list/employee-details/employee-details.component';
import { EmployeeService } from './employee-list/employee.service';
import { FilterPipe } from './pipe/filter.pipe';
const appRoutes: Routes = [
  { 'path': '', component: EmployeeListComponent },
  { 'path': 'employee-details/:id', component: EmployeeDetailsComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NgxPaginationModule,
    BarRatingModule,
    FormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
