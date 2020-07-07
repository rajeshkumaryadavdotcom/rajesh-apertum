import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AppService } from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private router: Router, private appService: AppService) {}
  msg: string =
    'This is demo project and you need to login with username/password as admin/123456';

  login(form: NgForm) {
    this.appService.login(form.value).subscribe((response: any) => {
      if (response.error_message) {
        this.msg = response.error_message;
        return;
      } else {
        this.msg = response.message;
        sessionStorage.setItem('token', response.token);
        this.router.navigate(['list']);
      }
    });
  }

  forgotPassword() {
    this.msg = 'Forgot password feature is NOT part of user story/requirement';
  }
}
