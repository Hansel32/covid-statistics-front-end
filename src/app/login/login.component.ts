import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import {LoginService} from '../services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  formSubmitted = false;

  constructor(private fb: FormBuilder,
              private loginService: LoginService,
              private router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])]
    });
  }

  onSubmit(loginForm): any {
    this.formSubmitted = true;
    let username;
    let password;
    let user$;

    if (this.form.valid) {
      username = this.form.controls.username.value;
      password = this.form.controls.password.value;

      user$ = this.loginService.login(username, password);

      user$.subscribe(
        (data: any) => {
          console.log(data);
          this.router.navigate(['/']);
        },
        err => {
          console.error(err.error);
          this.form.controls.username.reset('');
          this.form.controls.password.reset('');
        }
      );
    } else {
      console.log('The form is NOT valid');
      this.formSubmitted = false;
    }
  }
}
