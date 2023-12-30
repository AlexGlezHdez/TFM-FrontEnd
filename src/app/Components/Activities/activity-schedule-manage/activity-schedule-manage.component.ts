import { OnInit, Self } from '@angular/core';
import { Component } from '@angular/core';
import { ScheduledActivityService } from 'src/app/Services/scheduled-activity.service';
import { ScheduledActivityDTO } from 'src/app/Models/scheduled-activity.dto';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/Services/toast.service';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'app-activity-schedule-manage',
  templateUrl: './activity-schedule-manage.component.html',
  styleUrls: ['./activity-schedule-manage.component.scss'],
})
export class ActivityScheduleManageComponent implements OnInit {
  actividades!: ScheduledActivityDTO[];

  tituloActividad: UntypedFormControl;

  constructor(
    private scheduledActivityService: ScheduledActivityService,
    private router: Router,
    private toastService: ToastService
  ) {
    this.tituloActividad = new UntypedFormControl('');

    this.cargarActividades();
  }

  ngOnInit() {
    this.tituloActividad.valueChanges.subscribe(() => {
      this.cargarActividades();
    });
  }

  private async cargarActividades(): Promise<void> {
    const filtroTitulo: string = this.tituloActividad.value;
    await this.scheduledActivityService
      .getActivities(filtroTitulo)
      .then((actividades) => {
        this.actividades = Object.assign([], actividades.data);
      })
      .catch((resp) => {
        this.toastService.mostrarMensaje(
          'Error al cargar las actividades',
          false
        );
      });
  }

  verCurso(idActividad: number) {
    this.router.navigateByUrl('/actividad/' + idActividad);
  }

  actualizarActividad(idActividad: number): void {
    this.router.navigateByUrl('/admin/calendario-actividad/' + idActividad);
  }

  async borrarActividad(idActividad: number): Promise<void> {
    this.scheduledActivityService
      .deleteActivity(idActividad)
      .then(() => {
        this.cargarActividades();
        this.toastService.mostrarMensaje(
          'Acividad borrada correctamente',
          true
        );
      })
      .catch((resp) => {
        this.toastService.mostrarMensaje('Error al borrar la actividad', false);
      });
  }
}
