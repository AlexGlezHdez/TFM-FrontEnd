import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ScheduledActivityDTO } from 'src/app/Models/scheduled-activity.dto';
import { ScheduledActivityService } from 'src/app/Services/scheduled-activity.service';
import { ToastService } from 'src/app/Services/toast.service';

@Component({
  selector: 'app-activities-list',
  templateUrl: './activities-list.component.html',
  styleUrls: ['./activities-list.component.scss'],
})
export class ActivitiesListComponent {
  actividades!: ScheduledActivityDTO[];

  constructor(
    private scheduledActivityService: ScheduledActivityService,
    private router: Router,
    private toastService: ToastService
  ) {
    this.cargarActividades();
  }

  private async cargarActividades(): Promise<void> {
    await this.scheduledActivityService
      .getActivities()
      .then((actividades) => {
        this.actividades = actividades.data;
      })
      .catch(() =>
        this.toastService.mostrarMensaje(
          'Error al cargar las actividades',
          false
        )
      );
  }

  leerActividad(idActividad: number) {
    this.router.navigateByUrl('/actividad/' + idActividad);
  }
}
