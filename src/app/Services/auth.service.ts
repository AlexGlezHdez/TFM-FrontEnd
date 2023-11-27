import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthDTO } from '../Models/auth.dto';

import { LocalStorageService } from './local-storage.service';

import { firstValueFrom } from 'rxjs';

interface AuthToken {
  user_id: string;
  access_token: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private urlBlogUocApi: string;
  private controller: string;

  private mockupNewsDataFile: string = '/assets/login-data.json';

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {
    this.controller = 'auth';
    this.urlBlogUocApi = 'http://localhost:3000/' + this.controller;
  }

  login(auth: AuthDTO): Promise<AuthToken> {
    //    return firstValueFrom(this.http.post<AuthToken>(this.urlBlogUocApi, auth));
    return firstValueFrom(
      //this.http.post<AuthToken>(this.mockupNewsDataFile, auth)
      this.http.get<AuthToken>(this.mockupNewsDataFile)
    );
  }

  logout(): void {
    this.localStorageService.remove('access_token');
    this.localStorageService.remove('user_id');
  }

  isLoggedIn(): boolean {
    return this.localStorageService.get('access_token') ? true : false;
  }
}
