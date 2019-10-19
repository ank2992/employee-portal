import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { BarRatingModule } from "ngx-bar-rating";
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';

import { EmployeeDetailsComponent } from './employee-list/employee-details/employee-details.component';

import { FilterPipe } from './pipe/filter.pipe';
import { AppRoutingModule } from './app-routing.module';
import { EmployeeService } from './services/employee.service';
import { EmployeeListComponent } from './employee-list/employee-list.component';


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
    NgxPaginationModule,
    BarRatingModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule 
   ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
