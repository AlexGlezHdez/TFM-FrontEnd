import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ScheduledActivityDTO } from 'src/app/Models/scheduled-activity.dto';
import { ScheduledActivityService } from 'src/app/Services/scheduled-activity.service';
import { ActivityDTO } from 'src/app/Models/activity.dto';
import { ActivityService } from 'src/app/Services/activity.service';
import { ToastService } from 'src/app/Services/toast.service';

@Component({
  selector: 'app-activity-schedule-update',
  templateUrl: './activity-schedule-update.component.html',
  styleUrls: ['./activity-schedule-update.component.scss'],
})
export class ActivityScheduleUpdateComponent implements OnInit {
  actividadAgendada!: ScheduledActivityDTO;

  idActividadAgendada: string;

  idActividad: UntypedFormControl;
  fecha: UntypedFormControl;
  detalles: UntypedFormControl;
  plazas: UntypedFormControl;
  activityForm: UntypedFormGroup;

  actividades?: ActivityDTO[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: UntypedFormBuilder,
    private scheduledActivityService: ScheduledActivityService,
    private toastService: ToastService,
    private activityService: ActivityService
  ) {
    this.idActividadAgendada =
      this.activatedRoute.snapshot.paramMap.get('id') || '';

    this.idActividad = new UntypedFormControl('', [Validators.required]);
    this.fecha = new UntypedFormControl('', [Validators.required]);
    this.detalles = new UntypedFormControl('', [Validators.required]);
    this.plazas = new UntypedFormControl('', [Validators.required]);

    this.activityForm = this.formBuilder.group({
      idActividad: this.idActividad,
      fecha: this.fecha,
      detalles: this.detalles,
      plazas: this.plazas,
    });

    this.actividadAgendada = new ScheduledActivityDTO();
  }

  async ngOnInit() {
    await this.cargarActividades().then(() => {
      if (this.idActividadAgendada) {
        this.scheduledActivityService
          .getActivity(this.idActividadAgendada)
          .then((actividadAgendada) => {
            this.actividadAgendada = actividadAgendada.data;
            this.idActividad.setValue(this.actividadAgendada.actividad.id);
            this.fecha.setValue(this.actividadAgendada.fecha.substring(0, 10));
            this.detalles.setValue(this.actividadAgendada.detalles);
            this.plazas.setValue(this.actividadAgendada.plazas);
          })
          .catch((resp) => {
            this.toastService.mostrarMensaje(
              'Error al cargar los datos',
              false
            );
          });
      }
    });
  }

  private async cargarActividades(): Promise<void> {
    await this.activityService
      .getActivities()
      .then((actividades) => {
        this.actividades = Object.assign([], actividades.data);
      })
      .catch((resp) => {
        this.toastService.mostrarMensaje('Error al cargar los datos', false);
      });
  }

  enviarDatos(): void {
    this.actividadAgendada.actividad.id = this.idActividad.value;
    this.actividadAgendada.fecha = this.fecha.value;
    this.actividadAgendada.detalles = this.detalles.value;
    this.actividadAgendada.plazas = this.plazas.value;

    // Gestionamos si se trata de una actualizacion o de un curso nuevo segun exista idActividadAgendada
    if (this.idActividadAgendada && !isNaN(Number(this.idActividadAgendada))) {
      // Es una actualización
      this.actividadAgendada.id = Number(this.idActividadAgendada.valueOf());
      this.scheduledActivityService
        .updateActivity(this.actividadAgendada)
        .then((resp) => {
          this.toastService
            .mostrarMensaje('Actividad actualizada correctamente', true)
            .then(() => {
              this.router.navigateByUrl('/admin/calendario-actividades');
            });
        })
        .catch((resp) => {
          this.toastService.mostrarMensaje(
            'Error al actualizar la actividad',
            false
          );
        });
    } else {
      this.scheduledActivityService
        .createActivity(this.actividadAgendada)
        .then((resp) => {
          this.toastService
            .mostrarMensaje('Actividad actualizada correctamente', true)
            .then(() => {
              this.router.navigateByUrl('/admin/calendario-actividades');
            });
        })
        .catch((resp) => {
          this.toastService.mostrarMensaje(
            'Error al actualizar la actividad',
            false
          );
        });
    }
  }
}
