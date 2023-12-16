import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivityDTO } from '../Models/activity.dto';
import { ScheduledActivityDTO } from '../Models/scheduled-activity.dto';

import { firstValueFrom } from 'rxjs';

interface ActividadAgendadaAPI {
  id?: number;
  fecha: string;
  detalles: string;
  plazas: number;
  idActividad: number;
}

@Injectable({
  providedIn: 'root',
})
export class ScheduledActivityService {
  private urlApi: string;
  private ativitiesCalendarController: string;

  constructor(private http: HttpClient) {
    this.ativitiesCalendarController = 'calendario-actividades';
    this.urlApi =
      'http://localhost:8000/api/v1/' + this.ativitiesCalendarController;
  }

  getActivities(filtroTitulo?: string): Promise<any> {
    const filtro: string = filtroTitulo ? '?titulo[lk]=' + filtroTitulo : '';
    return firstValueFrom(this.http.get(this.urlApi + filtro));
    //    return firstValueFrom(this.http.get(this.urlApi));
  }

  getActivity(idActividad: string): Promise<any> {
    return firstValueFrom(this.http.get(this.urlApi + '/' + idActividad));
  }

  updateActivity(actividadAgendada: ScheduledActivityDTO): Promise<any> {
    const actividadAgendadaAPI: ActividadAgendadaAPI = {
      id: actividadAgendada.id,
      fecha: actividadAgendada.fecha,
      detalles: actividadAgendada.detalles,
      idActividad: actividadAgendada.actividad.id,
      plazas: actividadAgendada.plazas,
    };

    return firstValueFrom(
      this.http.patch(
        this.urlApi + '/' + actividadAgendada.id,
        actividadAgendadaAPI
      )
    );
  }

  createActivity(actividadAgendada: ScheduledActivityDTO): Promise<any> {
    const actividadAgendadaAPI: ActividadAgendadaAPI = {
      fecha: actividadAgendada.fecha,
      detalles: actividadAgendada.detalles,
      plazas: actividadAgendada.plazas,
      idActividad: actividadAgendada.actividad.id,
    };

    return firstValueFrom(this.http.post(this.urlApi, actividadAgendadaAPI));
  }

  deleteActivity(idActividad: number): Promise<any> {
    return firstValueFrom(this.http.delete(this.urlApi + '/' + idActividad));
  }

  // Recupera todas las actividades en las que un miembro dado está apuntado
  getMemberActivities(idMiembro: string): Promise<any> {
    return firstValueFrom(this.http.get(this.urlApi + '/' + idMiembro));
  }

  // Elemina a un miembro dado de una actividad dada y devuelve las actividades en las que continua apuntado
  deleteMemberFromActivity(
    idMiembro: string,
    idActividad: number
  ): Promise<any> {
    return firstValueFrom(
      this.http.delete(this.urlApi + '/' + idActividad + '/' + idMiembro)
    );
  }
}
