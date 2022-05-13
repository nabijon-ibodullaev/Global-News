import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  template: ` <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <form class="example-form">
          <mat-card class="my-4">
            <h1 class="text-center fw-bolder text-uppercase">Sign up</h1>
            <mat-form-field class="example-full-width" appearance="fill">
              <mat-label>First Name</mat-label>
              <input matInput placeholder="first name" />
            </mat-form-field>
            <mat-form-field class="example-full-width" appearance="fill">
              <mat-label>Last Name</mat-label>
              <input matInput placeholder="last name" />
            </mat-form-field>
            <mat-form-field class="example-full-width" appearance="fill">
              <mat-label>Email</mat-label>
              <input type="email" matInput placeholder="email" />
            </mat-form-field>
            <mat-form-field class="example-full-width" appearance="fill">
              <mat-label>Gender</mat-label>
              <mat-select>
                <mat-option
                  *ngFor="let gender of Genders"
                  [value]="gender.value"
                >
                  {{ gender.viewValue }}
                </mat-option>
              </mat-select>
            </mat-form-field>
            <mat-form-field class="example-full-width" appearance="fill">
              <mat-label>Choose a date</mat-label>
              <input matInput [matDatepicker]="picker" />
              <mat-hint>MM/DD/YYYY</mat-hint>
              <mat-datepicker-toggle
                matSuffix
                [for]="picker"
              ></mat-datepicker-toggle>
              <mat-datepicker
                #picker
                startView="year"
                [startAt]="startDate"
              ></mat-datepicker>
            </mat-form-field>
            <mat-form-field class="example-full-width" appearance="fill">
              <mat-label>Password</mat-label>
              <input type="password" matInput placeholder="password" />
            </mat-form-field>
            <mat-form-field class="example-full-width" appearance="fill">
              <mat-label>Confirm password</mat-label>
              <input type="password" matInput placeholder="Confirm password" />
            </mat-form-field>
            <div class="text-center">
              <button class="btn btn-danger px-4 fw-normal" type="submit">
                Submit
              </button>
            </div>
          </mat-card>
        </form>
      </div>
    </div>
  </div>`,
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
export class SignUpComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  Genders = [
    { value: 'Male', viewValue: 'Male' },
    { value: 'Female', viewValue: 'Female' },
    { value: 'Other', viewValue: 'Other' },
  ];
  startDate = new Date(2001, 7, 4);
}
