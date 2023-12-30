import { Injectable } from '@angular/core';
import { inject } from '@angular/core';

import { AuthService } from 'src/app/Services/auth.service';

import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../Services/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private localStorageService: LocalStorageService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const access_token = this.localStorageService.get('access_token');
    if (access_token) {
      // logged in so return true
      return true;
    }

    this.router.navigate(['/login']);

    return false;
  }
}

export const authAdminGuard = () => {
  const router = inject(Router);
  const authService = inject(AuthService);

  const response = authService
    .isAdmin()
    .then((resp) => {
      return true;
    })
    .catch((resp) => {
      return router.parseUrl('/miembros');
    });
  return response;
};
