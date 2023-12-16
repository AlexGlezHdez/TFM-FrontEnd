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

@Component({
  selector: 'app-activity-schedule-update',
  templateUrl: './activity-schedule-update.component.html',
  styleUrls: ['./activity-schedule-update.component.scss'],
})
export class ActivityScheduleUpdateComponent {
  actividadAgendada!: ScheduledActivityDTO;

  idActividadAgendada: string;

  idActividad: UntypedFormControl;
  fecha: UntypedFormControl;
  detalles: UntypedFormControl;
  plazas: UntypedFormControl;
  activityForm: UntypedFormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: UntypedFormBuilder,
    private scheduledActivityService: ScheduledActivityService
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
  }

  async ngOnInit() {
    if (this.idActividadAgendada) {
      await this.scheduledActivityService
        .getActivity(this.idActividadAgendada)
        .then((actividadAgendada) => {
          this.actividadAgendada = actividadAgendada.data;
          this.idActividad.setValue(this.actividadAgendada.actividad.id);
          this.fecha.setValue(this.actividadAgendada.fecha);
          this.detalles.setValue(this.actividadAgendada.detalles);
          this.plazas.setValue(this.actividadAgendada.plazas);
        });
    } else {
      this.actividadAgendada = new ScheduledActivityDTO();
    }
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
      this.scheduledActivityService.updateActivity(this.actividadAgendada);
    } else {
      this.scheduledActivityService.createActivity(this.actividadAgendada);
    }
  }
}
