import {Component, OnInit} from '@angular/core';
import {LoginService} from './services/login.service';
import {Router} from '@angular/router';
import {DashboardService} from './services/dashboard.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'covid-statistics';
  isLogging = false;

  constructor(private loginService: LoginService,
              private dashboardService: DashboardService,
              private router: Router, private location: Location) {  }

  ngOnInit(): any {

    this.router.events.subscribe(() => {
      if (this.location.path() === '/login') {
        this.isLogging = true;
      } else {
        this.isLogging = false;
      }
    });
  }

  logOut(): any {
    let session$;
    session$ = this.loginService.logOut();
    session$.subscribe((data: any) => {
      this.router.navigate(['/login']);
    }, error => {
      console.log(error);
    });
  }

  syncData(): any {
    let fetch$;
    fetch$ = this.dashboardService.syncData();
    fetch$.subscribe((data: any) => {
      console.log(data);
    }, error => {
      console.log(error);
    });
  }
}
