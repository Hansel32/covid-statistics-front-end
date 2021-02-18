import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DashboardService} from '../services/dashboard.service';
import {IContinents} from './interfaces/IContinents';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dashboardData: IContinents[];
  countryName = '';
  continents$: Observable<any>;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private dashboardService: DashboardService) {
    this.dashboardData = [
      { continent: '', data: {confirmedCases: 0, deaths: 0}},
      { continent: '', data: {confirmedCases: 0, deaths: 0}},
      { continent: '', data: {confirmedCases: 0, deaths: 0}},
      { continent: '', data: {confirmedCases: 0, deaths: 0}},
      { continent: '', data: {confirmedCases: 0, deaths: 0}}];
  }

  ngOnInit(): void {
    let isAuth;

    isAuth = this.dashboardService.fetchData();
    isAuth.subscribe((data: any) => {
      this.dashboardData = data;
    }, err => {
      console.log(err);
      this.router.navigate(['/login']);
    });
  }

  search(countryName): void {
    this.router.navigate(['country-details', countryName]);
  }
}
