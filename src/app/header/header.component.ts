import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isUserLoggedIn = false;

  isLoginOpened = false;
  isSignUpOpened = false;

  constructor() { }

  ngOnInit() {
  }

  onLogin() {
    this.isLoginOpened = !this.isLoginOpened;
  }

  onSignUp() {
    this.isSignUpOpened = !this.isSignUpOpened;
  }

  onUserSubmit() {
    this.isLoginOpened = false;
    this.isUserLoggedIn = true;
  }
}
