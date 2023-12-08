import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/Services/auth.service';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-member-menu',
  templateUrl: './member-menu.component.html',
  styleUrls: ['./member-menu.component.scss'],
})
export class MemberMenuComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
    private loginService: LoginService
  ) {}

  logout(): void {
    this.authService.logout();
    this.loginService.loggedInManagement.next(false);
    this.router.navigateByUrl('/');
  }
}
