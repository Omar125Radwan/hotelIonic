/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  login = {
    email: '',
    password: ''
  };
  constructor() { }
  type: boolean = true;
  ngOnInit() {
  }

  changeType() {
    this.type = !this.type;
  }
  goToForget() {

  }
  goToHome() {

  }
  gmaillLogin() {

  }
  twitterLogin() {

  }
  facebookLogin() {

  }

  touchLogin() {

  }
  faceLogin() {

  }

  goToRegister() {

  }

}
