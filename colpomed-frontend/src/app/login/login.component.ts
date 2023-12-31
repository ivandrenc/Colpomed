import { Component } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {
  constructor(public authService: AuthService) {}
  userNameFormControl = new FormControl('', Validators.email);
}


