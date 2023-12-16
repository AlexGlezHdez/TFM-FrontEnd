import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ActivityService } from 'src/app/Services/activity.service';
import { ActivityDTO } from 'src/app/Models/activity.dto';
import { Router } from '@angular/router';

import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'app-activities-manage',
  templateUrl: './activities-manage.component.html',
  styleUrls: ['./activities-manage.component.scss'],
})
export class ActivitiesManageComponent {
  actividades!: ActivityDTO[];

  tituloActividad: UntypedFormControl;

  constructor(
    private activityService: ActivityService,
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
    await this.activityService
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
    this.router.navigateByUrl('/admin/actividad/' + idActividad);
  }

  async borrarCurso(idActividad: number): Promise<void> {
    this.activityService.deleteActivity(idActividad).then(() => {
      this.cargarActividades();
    });
  }
}
