import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import {CountryDetailsComponent} from '../country-details/country-details.component';
import {CasesManagementComponent} from '../cases-management/cases-management.component';
import {AddCountryComponent} from '../country-details/components/add-country/add-country.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },  {
    path: 'register',
    component: RegisterComponent,
  }, {
    path: '',
    component: DashboardComponent,
  }, {
    path: 'country-details/:id',
    component: CountryDetailsComponent,
  }, {
    path: 'cases-management',
    component: CasesManagementComponent,
  }, {
    path: 'country/add-country',
    component: AddCountryComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
