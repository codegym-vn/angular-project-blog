import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  username: FormControl;
  password: FormControl;
  constructor(builder: FormBuilder) {
      this.username = new FormControl;
      this.password = new FormControl;
      this.loginForm = builder.group({
          username: this.username,
          password: this.password
      });
  }
  login() {
    console.log(this.loginForm.value);
  }
  ngOnInit() {
  }

}
