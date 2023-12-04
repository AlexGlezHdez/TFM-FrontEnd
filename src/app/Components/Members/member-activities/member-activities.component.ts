import { Component } from '@angular/core';
import { ActivityDTO } from 'src/app/Models/activity.dto';
import { ActivityService } from 'src/app/Services/activity.service';
import { LocalStorageService } from 'src/app/Services/local-storage.service';

@Component({
  selector: 'app-member-activities',
  templateUrl: './member-activities.component.html',
  styleUrls: ['./member-activities.component.scss'],
})
export class MemberActivitiesComponent {
  actividades!: ActivityDTO[];
  private idMiembro: string;

  constructor(
    private activityService: ActivityService,
    private localStorageService: LocalStorageService
  ) {
    this.cargarActividadesMiembro();
    this.idMiembro = this.localStorageService.get('user_id') || '';
  }

  private async cargarActividadesMiembro(): Promise<void> {
    await this.activityService
      .getMemberActivities(this.idMiembro)
      .then((actividades) => {
        this.actividades = actividades;
      });
    //        .catch((error) => this.sharedService.errorLog(error.error));
  }

  // Indica si una actividad es histórica (ya ha ocurrido) o no
  actividadPasada(fechaActividad: string) {
    const fechaActual = Date.now();
    const fecha = Date.parse(fechaActividad);
    return fechaActual > fecha;
  }

  // Borra al usuario activo de una actividad dada
  async borrarDeActividad(idActividad: number) {
    alert('Borrando de actividad');
    await this.activityService
      .deleteMemberFromActivity(this.idMiembro, idActividad)
      .then((actividades) => {
        this.actividades = actividades;
      });
  }
}
