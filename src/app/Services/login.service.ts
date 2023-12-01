import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  loggedInManagement: BehaviorSubject<boolean>;

  constructor(authService: AuthService) {
    this.loggedInManagement = new BehaviorSubject<boolean>(
      authService.isLoggedIn()
    );
  }
}
