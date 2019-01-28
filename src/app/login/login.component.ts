import { Component, OnInit } from '@angular/core';

import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    this.authService.singin(form.value.email, form.value.password).subscribe(
        response => console.log(response),
        error => console.log(error)
    );
  }

}
