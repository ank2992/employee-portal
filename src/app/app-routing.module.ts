/**
 * This is the routing component created  to handle all the routing of employee-portal
 * */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeDetailsComponent } from './employee-list/employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
const approutes: Routes = [
    { path: '', component: EmployeeListComponent },
    { path: 'employee-details/:id', component: EmployeeDetailsComponent }

];
@NgModule({
    imports: [RouterModule.forRoot(approutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
