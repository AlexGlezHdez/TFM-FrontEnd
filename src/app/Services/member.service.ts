import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MemberDTO } from '../Models/member.dto';

import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  private urlApi: string;
  private controller: string;

  private mockupMembersDataFile: string = '/assets/members-data.json';
  private mockupPasswordDataFile: string = '/assets/password-data.json';

  constructor(private http: HttpClient) {
    this.controller = 'posts';
    this.urlApi = 'http://localhost:3000/' + this.controller;
  }

  getMembers(): Promise<MemberDTO[]> {
    return firstValueFrom(
      this.http.get<MemberDTO[]>(this.mockupMembersDataFile)
    );
  }

  getMember(idMember: number): Promise<MemberDTO[]> {
    return firstValueFrom(
      this.http.get<MemberDTO[]>(this.mockupMembersDataFile)
    );
  }

  updatePassword(
    idMiembro: string,
    passwordActual: string,
    passwordNueva: string
  ): Promise<void> {
    /* Llamada para actualizar la contraseña */
    return firstValueFrom(
      this.http.post<void>(this.mockupPasswordDataFile, passwordNueva)
    );
  }
}
