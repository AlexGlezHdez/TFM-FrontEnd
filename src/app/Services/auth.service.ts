import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthDTO } from '../Models/auth.dto';

import { LocalStorageService } from './local-storage.service';

import { firstValueFrom } from 'rxjs';

import { Constantes } from '../Components/Shared/constants/constants.component';

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

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {
    this.urlApi = Constantes.urlAPI;
    this.loginController = 'login';
    this.logoutController = 'logout';
  }

  login(auth: AuthDTO): Promise<AuthToken> {
    return firstValueFrom(
      this.http.post<AuthToken>(this.urlApi + this.loginController, auth)
    );
  }

  logout(): void {
    firstValueFrom(
      this.http.post<AuthToken>(this.urlApi + this.logoutController, '')
    ).then(() => {
      this.localStorageService.remove('access_token');
      this.localStorageService.remove('user_id');
    });
  }

  isLoggedIn(): boolean {
    return this.localStorageService.get('access_token') ? true : false;
  }

  isAdmin(): Promise<any> {
    return firstValueFrom(
      this.http.post<AuthToken>(this.urlApi + 'admin', '', {
        observe: 'response',
      })
    );
  }
}
