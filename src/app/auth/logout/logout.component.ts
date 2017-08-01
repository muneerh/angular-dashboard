import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../@externals/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
    this.auth.Unauthenticate();
  }

}
