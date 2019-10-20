import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BarRatingModule } from 'ngx-bar-rating';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeDetailsComponent } from './employee-list/employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HeaderComponent } from './header/header.component';
import { FilterPipe } from './pipe/filter.pipe';
import { EmployeeService } from './services/employee.service';


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
