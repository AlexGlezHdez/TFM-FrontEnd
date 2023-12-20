import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivityDTO } from '../Models/activity.dto';

import { firstValueFrom } from 'rxjs';

import { Constantes } from '../Components/Shared/constants/constants.component';

interface ActividadAPI {
  id?: number;
  titulo: string;
  imagen: string;
  descripcion: string;
}

@Injectable({
  providedIn: 'root',
})
export class ActivityService {
  private urlApi: string;
  private activityController: string;

  private mockupNewsDataFile: string = '/assets/activities-data.json';

  constructor(private http: HttpClient) {
    this.activityController = 'v1/actividades';
    this.urlApi = Constantes.urlAPI + this.activityController;
  }

  // Recupera todas las actividades
  getActivities(filtroTitulo?: string): Promise<any> {
    const filtro: string = filtroTitulo ? '?titulo[lk]=' + filtroTitulo : '';
    return firstValueFrom(this.http.get(this.urlApi + filtro));
  }

  // Recupera toda la informacion de una actividad dada
  getActivity(idActividad: string): Promise<any> {
    return firstValueFrom(this.http.get(this.urlApi + '/' + idActividad));
  }

  updateActivity(actividad: ActivityDTO): Promise<any> {
    return firstValueFrom(
      this.http.patch(this.urlApi + '/' + actividad.id, actividad)
    );
  }

  createActivity(actividad: ActivityDTO): Promise<any> {
    return firstValueFrom(this.http.post(this.urlApi, actividad));
  }

  deleteActivity(idActividad: number): Promise<any> {
    return firstValueFrom(this.http.delete(this.urlApi + '/' + idActividad));
  }
}
