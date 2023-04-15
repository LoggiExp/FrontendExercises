import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginControl = new FormGroup({
    emailControl: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    passwordControl: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(3),
    ]),
  });

  login() {
    console.log(this.loginControl.value);
  }
}
