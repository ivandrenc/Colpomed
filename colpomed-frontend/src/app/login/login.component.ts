import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from "firebase/auth";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {
  constructor(public auth: AngularFireAuth) {}

  loginWithGoogle() {
    this.auth.signInWithPopup(new GoogleAuthProvider());
  }

  logout() {
    this.auth.signOut();
  }
}
