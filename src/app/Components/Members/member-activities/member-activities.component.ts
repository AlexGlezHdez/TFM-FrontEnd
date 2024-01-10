import { Component } from '@angular/core';
import { ScheduledActivityDTO } from 'src/app/Models/scheduled-activity.dto';
import { ScheduledActivityService } from 'src/app/Services/scheduled-activity.service';
import { LocalStorageService } from 'src/app/Services/local-storage.service';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/Services/toast.service';

@Component({
  selector: 'app-member-activities',
  templateUrl: './member-activities.component.html',
  styleUrls: ['./member-activities.component.scss'],
})
export class MemberActivitiesComponent {
  actividades!: ScheduledActivityDTO[];
  private idMiembro: string;

  constructor(
    private scheduledActivityService: ScheduledActivityService,
    private localStorageService: LocalStorageService,
    private router: Router,
    private toastService: ToastService
  ) {
    this.cargarActividadesMiembro();
    this.idMiembro = this.localStorageService.get('user_id') || '';
  }

  private async cargarActividadesMiembro(): Promise<void> {
    await this.scheduledActivityService
      .getMemberActivities()
      .then((actividades) => {
        this.actividades = actividades.data;
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
  borrarDeActividad = async (idActividad: number): Promise<void> => {
    await this.scheduledActivityService
      .dismissFromActivity(idActividad)
      .then(() => {
        this.cargarActividadesMiembro();
        this.toastService.mostrarMensaje(
          'Borrado de la actividad correctamente',
          true
        );
      })
      .catch((resp) => {
        this.toastService.mostrarMensaje(
          'Error al borrarse de la actividad',
          false
        );
      });
  };

  previewActividad = (idActividad: number): void => {
    this.router.navigateByUrl('/actividad/' + idActividad);
  };
}
