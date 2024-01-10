import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ScheduledActivityDTO } from 'src/app/Models/scheduled-activity.dto';
import { ScheduledActivityService } from 'src/app/Services/scheduled-activity.service';
import { ToastService } from 'src/app/Services/toast.service';

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.scss'],
})
export class ActivityDetailComponent {
  actividadAgendada: ScheduledActivityDTO;

  usuarioInscrito: boolean;

  plazasOcupadas: number;

  private idActividad: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private scheduledActivityService: ScheduledActivityService,
    private location: Location,
    private toastService: ToastService
  ) {
    this.idActividad = this.activatedRoute.snapshot.paramMap.get('id') || '';
    this.actividadAgendada = new ScheduledActivityDTO();
    this.usuarioInscrito = false;
    this.plazasOcupadas = 0;
  }

  async ngOnInit(): Promise<void> {
    await this.scheduledActivityService
      .getActivity(this.idActividad)
      .then((actividad) => {
        this.actividadAgendada = actividad.data;
      })
      .catch(() =>
        this.toastService.mostrarMensaje(
          'Error al cargar los detalles de la actividad',
          false
        )
      );
    this.comprobarInscripcion();
    this.obtenerPlazasOcupadas();
  }

  obtenerPlazasOcupadas() {
    this.scheduledActivityService
      .getEnroledToActivity(this.idActividad)
      .then((resp) => (this.plazasOcupadas = resp.length));
  }

  comprobarInscripcion() {
    this.scheduledActivityService
      .isEnroled(this.idActividad)
      .then((inscrito) => (this.usuarioInscrito = inscrito));
  }

  inscribirUsuario() {
    this.scheduledActivityService
      .enrolToActivity(this.idActividad)
      .then(() => {
        this.usuarioInscrito = true;
        this.toastService.mostrarMensaje(
          'Apuntado a la actividad correctamente',
          true
        );
        this.obtenerPlazasOcupadas();
      })
      .catch(() => {
        this.toastService.mostrarMensaje(
          'Error al apuntarse a la actividad',
          false
        );
      });
  }

  borrarUsuario() {
    this.scheduledActivityService
      .dismissFromActivity(Number(this.idActividad))
      .then(() => {
        this.usuarioInscrito = false;
        this.toastService.mostrarMensaje(
          'Borrado de la actividad correctamente',
          true
        );
        this.obtenerPlazasOcupadas();
      })
      .catch(() => {
        this.toastService.mostrarMensaje(
          'Error al borrarse de la actividad',
          false
        );
      });
  }

  back(): void {
    this.location.back();
  }
}
