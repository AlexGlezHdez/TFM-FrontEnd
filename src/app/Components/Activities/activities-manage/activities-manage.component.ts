import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ActivityService } from 'src/app/Services/activity.service';
import { ActivityDTO } from 'src/app/Models/activity.dto';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/Services/toast.service';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'app-activities-manage',
  templateUrl: './activities-manage.component.html',
  styleUrls: ['./activities-manage.component.scss'],
})
export class ActivitiesManageComponent implements OnInit {
  actividades!: ActivityDTO[];

  tituloActividad: UntypedFormControl;

  constructor(
    private activityService: ActivityService,
    private toastService: ToastService,
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
      })
      .catch((resp) => {
        this.toastService.mostrarMensaje(
          'Error al cargar las actividades',
          false
        );
      });
  }

  verActividad(idActividad: number) {
    this.router.navigateByUrl('/actividad/' + idActividad);
  }

  actualizarActividad = (idActividad: number): void => {
    this.router.navigateByUrl('/admin/actividad/' + idActividad);
  };

  borrarActividad = async (idActividad: number): Promise<void> => {
    if (confirm('¿Seguro que deseas borrar el curso?')) {
      this.activityService
        .deleteActivity(idActividad)
        .then((resp) => {
          this.cargarActividades();
          this.toastService.mostrarMensaje(
            'Actividad borrada correctamente',
            true
          );
        })
        .catch((resp) => {
          this.toastService.mostrarMensaje(
            'Error al borrar la actividad',
            false
          );
        });
    }
  };
}
