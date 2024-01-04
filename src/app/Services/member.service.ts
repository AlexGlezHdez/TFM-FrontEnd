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

  constructor(private http: HttpClient) {
    this.controller = 'v1/users';
    this.urlApi = Constantes.urlAPI + this.controller;
    this.urlApiPassword = Constantes.urlAPI + 'v1/password';
  }

  getMembers(filtroMiembro?: string): Promise<any> {
    const filtro: string = filtroMiembro ? '?nombre[lk]=' + filtroMiembro : '';

    return firstValueFrom(this.http.get(this.urlApi + filtro));
  }

  getMember(idMember: number): Promise<any> {
    return firstValueFrom(this.http.get(this.urlApi + '/' + idMember));
  }

  updateMember(miembro: MemberDTO): Promise<any> {
    return firstValueFrom(
      this.http.patch(this.urlApi + '/' + miembro.id, miembro)
    );
  }

  createMember(miembro: MemberDTO): Promise<any> {
    return firstValueFrom(this.http.post(this.urlApi, miembro));
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

  deleteMember(idMiembro: number): Promise<any> {
    return firstValueFrom(this.http.delete(this.urlApi + '/' + idMiembro));
  }
}
