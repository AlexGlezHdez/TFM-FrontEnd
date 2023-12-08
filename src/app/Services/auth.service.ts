import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthDTO } from '../Models/auth.dto';

import { LocalStorageService } from './local-storage.service';

import { firstValueFrom } from 'rxjs';

interface AuthToken {
  id: string;
  token: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private urlApi: string;
  private loginController: string;
  private logoutController: string;

  private mockupNewsDataFile: string = '/assets/login-data.json';

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {
    this.urlApi = 'http://localhost:8000/api/';
    this.loginController = 'login';
    this.logoutController = 'logout';
  }

  login(auth: AuthDTO): Promise<AuthToken> {
    return firstValueFrom(
      this.http.post<AuthToken>(this.urlApi + this.loginController, auth)
    );
  }

  logout(): void {
    this.localStorageService.remove('access_token');
    this.localStorageService.remove('user_id');
    firstValueFrom(
      this.http.post<AuthToken>(this.urlApi + this.logoutController, '')
    );
  }

  isLoggedIn(): boolean {
    return this.localStorageService.get('access_token') ? true : false;
  }
}
