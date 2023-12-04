import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivityDTO } from '../Models/activity.dto';

import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ActivityService {
  private urlApi: string;
  private controller: string;

  private mockupNewsDataFile: string = '/assets/activities-data.json';

  constructor(private http: HttpClient) {
    this.controller = 'posts';
    this.urlApi = 'http://localhost:3000/' + this.controller;
  }

  // Recupera todas las actividades
  getActivities(): Promise<ActivityDTO[]> {
    return firstValueFrom(
      this.http.get<ActivityDTO[]>(this.mockupNewsDataFile)
    );
  }

  // Recupera toda la informacion de una actividad dada
  getActivity(idActividad: string): Promise<ActivityDTO[]> {
    return firstValueFrom(
      this.http.get<ActivityDTO[]>(this.mockupNewsDataFile)
    );
  }

  // Recupera todas las actividades en las que un miembro dado está apuntado
  getMemberActivities(idMiembro: string): Promise<ActivityDTO[]> {
    return firstValueFrom(
      this.http.get<ActivityDTO[]>(this.mockupNewsDataFile)
    );
  }

  // Elemina a un miembro dado de una actividad dada y devuelve las actividades en las que continua apuntado
  deleteMemberFromActivity(
    idMiembro: string,
    idActividad: number
  ): Promise<ActivityDTO[]> {
    return firstValueFrom(
      this.http.get<ActivityDTO[]>(this.mockupNewsDataFile)
    );
  }
}
