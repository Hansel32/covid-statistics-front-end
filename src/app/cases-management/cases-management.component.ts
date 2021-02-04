import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-cases-management',
  templateUrl: './cases-management.component.html',
  styleUrls: ['./cases-management.component.css']
})
export class CasesManagementComponent implements OnInit {
  form: FormGroup;
  formSubmitted = false;
  toppings = new FormControl();
  countries = new FormControl();

  toppingList = ['Americas', 'Africa', 'Europe', 'Australia', 'Asia'];
  countriesList = ['Nicaragua', 'Brazil', 'Canada', 'Russia', 'Japan'];

  constructor(private fb: FormBuilder) { }

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
    const user$ = null;

    if (this.form.valid) {
      username = this.form.controls.username.value;
      password = this.form.controls.password.value;

      // user$ = this.authenticationService.login(username, password);

      user$.subscribe(
        (data: any) => console.log(data),
        err => console.error(err)
      );
    } else {
      console.log('The form is NOT valid');
      this.formSubmitted = false;
    }
  }

}
