import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivityDTO } from '../Models/activity.dto';
import { ScheduledActivityDTO } from '../Models/scheduled-activity.dto';

import { Constantes } from '../Components/Shared/constants/constants.component';

import { firstValueFrom } from 'rxjs';

interface ActividadAgendadaAPI {
  id?: number;
  fecha: string;
  detalles: string;
  plazas: number;
  idActividad: number;
}

interface ActividadMiembro {
  idActividad: number;
  idUsuario?: number;
}

@Injectable({
  providedIn: 'root',
})
export class ScheduledActivityService {
  private urlApi: string;
  private ativitiesCalendarController: string;

  constructor(private http: HttpClient) {
    this.ativitiesCalendarController = 'v1/calendario-actividades';
    this.urlApi = Constantes.urlAPI + this.ativitiesCalendarController;
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
  getMemberActivities(): Promise<any> {
    return firstValueFrom(this.http.get(this.urlApi + '/enroled'));
  }

  // Elimina a un miembro dado de una actividad dada y devuelve las actividades en las que continua apuntado
  deleteMemberFromActivity(
    idMiembro: string,
    idActividad: number
  ): Promise<any> {
    return firstValueFrom(
      this.http.delete(this.urlApi + '/' + idActividad + '/' + idMiembro)
    );
  }

  enrolToActivity(idActividad: string): Promise<any> {
    const actividad: ActividadMiembro = {
      idActividad: Number(idActividad),
    };
    return firstValueFrom(this.http.post(this.urlApi + '/enrol', actividad));
  }

  dismissFromActivity(idActividad: number): Promise<any> {
    return firstValueFrom(
      this.http.delete(this.urlApi + '/enrol/' + idActividad)
    );
  }

  isEnroled(idActividad: string): Promise<any> {
    return firstValueFrom(this.http.get(this.urlApi + '/enrol/' + idActividad))
      .then(() => true)
      .catch(() => false);
  }

  getEnroledToActivity(idActividad: string): Promise<any> {
    return firstValueFrom(
      this.http.get(this.urlApi + '/enroled/' + idActividad)
    )
      .then((resp) => {
        return resp;
      })
      .catch((resp) => {
        return resp;
      });
  }
}
