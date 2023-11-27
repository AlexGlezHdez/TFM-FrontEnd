import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/Services/auth.service';
import { LocalStorageService } from 'src/app/Services/local-storage.service';
import { LoggedService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-member-menu',
  templateUrl: './member-menu.component.html',
  styleUrls: ['./member-menu.component.scss'],
})
export class MemberMenuComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
    private localStorageService: LocalStorageService,
    private loginService: LoggedService
  ) {}

  logout(): void {
    this.localStorageService.remove('user_id');
    this.localStorageService.remove('access_token');
    this.loginService.loggedInManagement.next(false);
    this.router.navigateByUrl('/');
  }
}
