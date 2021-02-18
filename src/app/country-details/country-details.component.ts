import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DashboardService} from '../services/dashboard.service';
import {ICountry} from './interfaces/ICountry';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {

  countryName: string;
  countryData: ICountry;

  constructor(private route: ActivatedRoute,
              private dashboardService: DashboardService) {
    this.countryData = {
      continent: '', country: '', population: '',
      cases: {
        new: 0, active: 0, critical: 0,
        recovered: 0, '1M_pop': 0, total: 0
      },
      deaths: {
        new: 0, '1M_pop': 0, total: 0
      },
      day: '', time: ''
    };
  }



  ngOnInit(): void {
    this.countryName = this.route.snapshot.paramMap.get('id');
    this.getCountryDetails(this.countryName);
  }

  getCountryDetails(countryName): any {
    this.dashboardService.searchByCountry(countryName)
      .subscribe((data) => {
        console.log(data);
        this.countryData = data;
      }, error => {
        console.log(error);
      });
  }
}
