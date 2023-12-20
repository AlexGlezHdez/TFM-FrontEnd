import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MemberDTO } from '../Models/member.dto';

import { firstValueFrom } from 'rxjs';

import { Constantes } from '../Components/Shared/constants/constants.component';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  private urlApi: string;
  private urlApiPassword: string;
  private controller: string;

  private mockupMembersDataFile: string = '/assets/members-data.json';
  private mockupPasswordDataFile: string = '/assets/password-data.json';

  constructor(private http: HttpClient) {
    this.controller = 'v1/users';
    this.urlApi = Constantes.urlAPI + this.controller;
    this.urlApiPassword = Constantes.urlAPI + '/v1/password';
  }

  getMembers(): Promise<any> {
    return firstValueFrom(this.http.get(this.urlApi));
  }

  getMember(idMember: number): Promise<any> {
    return firstValueFrom(this.http.get(this.urlApi + '/' + idMember));
  }

  updateMember(miembro: MemberDTO): Promise<any> {
    return firstValueFrom(
      this.http.patch(this.urlApi + '/' + miembro.id, miembro)
    );
  }

  updatePassword(
    idMiembro: string,
    passwordActual: string,
    passwordNueva: string
  ): Promise<void> {
    /* Llamada para actualizar la contraseña */
    return firstValueFrom(
      this.http.post<void>(this.urlApiPassword, {
        password_actual: passwordActual,
        password_nueva: passwordNueva,
      })
    );
  }
}
