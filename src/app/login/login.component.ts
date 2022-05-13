import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-md-6 offset-md-3  ">
          <form class="example-form">
            <mat-card class="my-4">
              <h1 class="text-center fw-bolder text-uppercase">Login</h1>

              <mat-form-field class="example-full-width" appearance="fill">
                <mat-label>Email</mat-label>
                <input type="email" matInput placeholder="email" />
              </mat-form-field>

              <mat-form-field class="example-full-width" appearance="fill">
                <mat-label>Password</mat-label>
                <input type="password" matInput placeholder="password" />
              </mat-form-field>

              <div class="text-center">
                <button class="btn btn-danger px-4 fw-normal" type="submit">
                  Submit
                </button>
              </div>
            </mat-card>
          </form>
          <div class="text-center">
            <p>
              Not a member?
              <a class="text-primary" routerLink="/sign-up">Create Account</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .example-form {
        min-width: 150px;
        max-width: 500px;
        width: 100%;
      }

      .example-full-width {
        width: 100%;
      }
    `,
  ],
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  Genders = [
    { value: 'Male', viewValue: 'Male' },
    { value: 'Female', viewValue: 'Female' },
    { value: 'Other', viewValue: 'Other' },
  ];
  startDate = new Date(2001, 7, 4);
}
