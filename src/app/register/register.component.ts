import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  formSubmitted = false;

  constructor(private fb: FormBuilder,
              private loginService: LoginService,
              private router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required])]
    });
  }

  onSubmit(loginForm): any {
    this.formSubmitted = true;
    let username;
    let password;
    let email;
    let user$;

    if (this.form.valid) {
      username = this.form.controls.username.value;
      password = this.form.controls.password.value;
      email = this.form.controls.email.value;

      user$ = this.loginService.register(username, password, email);

      user$.subscribe(
        (data: any) => { console.log(data);
                         this.router.navigate(['/login']); },
        err => console.error(err)
      );
    } else {
      console.log('The form is NOT valid');
      this.formSubmitted = false;
    }
  }

}
