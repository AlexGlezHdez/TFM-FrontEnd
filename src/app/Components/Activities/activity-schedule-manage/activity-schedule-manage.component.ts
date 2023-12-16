import { Component } from '@angular/core';
import { ScheduledActivityService } from 'src/app/Services/scheduled-activity.service';
import { ScheduledActivityDTO } from 'src/app/Models/scheduled-activity.dto';
import { Router } from '@angular/router';

import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'app-activity-schedule-manage',
  templateUrl: './activity-schedule-manage.component.html',
  styleUrls: ['./activity-schedule-manage.component.scss'],
})
export class ActivityScheduleManageComponent {
  actividades!: ScheduledActivityDTO[];

  tituloActividad: UntypedFormControl;

  constructor(
    private scheduledActivityService: ScheduledActivityService,
    private router: Router
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
      });
    //        .catch((error) => this.sharedService.errorLog(error.error));
  }

  verCurso(idActividad: number) {
    this.router.navigateByUrl('/actividad/' + idActividad);
  }

  actualizarCurso(idActividad: number): void {
    this.router.navigateByUrl('/admin/actividad-calendario/' + idActividad);
  }

  async borrarCurso(idActividad: number): Promise<void> {
    this.scheduledActivityService.deleteActivity(idActividad).then(() => {
      this.cargarActividades();
    });
  }
}
