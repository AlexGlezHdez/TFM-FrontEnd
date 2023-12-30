import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/Services/auth.service';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-member-menu',
  templateUrl: './member-menu.component.html',
  styleUrls: ['./member-menu.component.scss'],
})
export class MemberMenuComponent implements OnInit {
  showAdminMenu: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.authService
      .isAdmin()
      .then((resp) => {
        this.showAdminMenu = true;
      })
      .catch((resp) => {
        this.showAdminMenu = false;
      });
  }

  logout(): void {
    this.authService.logout();
    this.loginService.loggedInManagement.next(false);
    this.router.navigateByUrl('/');
  }
}
