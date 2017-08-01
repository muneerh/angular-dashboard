import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../@externals/auth.service';
import { RequestsService } from '../../requests.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  /**
   * Shows a dialog result to user.
   */
  public dialogResult = {
    message: '',
    type: ''
  };

  public form: {
    username: string;
    password: string;
  } = {
    password: '',
    username: ''
  };
  constructor(public auth: AuthService, public requests: RequestsService, public router: Router) { }

  updateForm (key, value) {
    this.form[key] = value;
  }

  clearMessage () {
    this.dialogResult = {
      message: '',
      type: ''
    };
  }

  async onSubmit () {
    this.clearMessage();
    const result = await this.requests.AuthenticateByUserPassword(this.form.username, this.form.password);
    if (result.success && result.token) {
      console.log('Authentication is successful.', result.token);
      this.auth.Token = result.token;
      this.dialogResult = {
        message: 'Your login is successful',
        type: 'success'
      };
      this.router.navigateByUrl('/index');

    } else {
      console.log('Authentication is failure!', result);
      this.dialogResult = {
        message: result.error.message,
        type: 'warning'
      };
    }
  }
  ngOnInit() {

  }

}
