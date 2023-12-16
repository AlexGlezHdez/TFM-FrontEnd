import { Component } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ActivityDTO } from 'src/app/Models/activity.dto';
import { ActivityService } from 'src/app/Services/activity.service';

@Component({
  selector: 'app-activity-update',
  templateUrl: './activity-update.component.html',
  styleUrls: ['./activity-update.component.scss'],
})
export class ActivityUpdateComponent {
  actividad!: ActivityDTO;

  idActividad: string;

  titulo: UntypedFormControl;
  imagen: UntypedFormControl;
  descripcion: UntypedFormControl;
  actividadForm: UntypedFormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: UntypedFormBuilder,
    private activityService: ActivityService
  ) {
    this.idActividad = this.activatedRoute.snapshot.paramMap.get('id') || '';

    this.titulo = new UntypedFormControl('', [Validators.required]);
    this.descripcion = new UntypedFormControl('', [Validators.required]);
    this.imagen = new UntypedFormControl('', [Validators.required]);

    this.actividadForm = this.formBuilder.group({
      titulo: this.titulo,
      descripcion: this.descripcion,
      imagen: this.imagen,
    });
  }

  async ngOnInit() {
    if (this.idActividad) {
      await this.activityService
        .getActivity(this.idActividad)
        .then((actividad) => {
          this.actividad = actividad.data;
          this.titulo.setValue(this.actividad.titulo);
          this.descripcion.setValue(this.actividad.descripcion);
          this.imagen.setValue(this.actividad.imagen);
        });
    } else {
      this.actividad = new ActivityDTO();
    }
  }

  enviarDatos(): void {
    this.actividad.titulo = this.titulo.value;
    this.actividad.descripcion = this.descripcion.value;
    this.actividad.imagen = this.imagen.value;

    // Gestionamos si se trata de una actualizacion o de una actividad nueva segun exista idActividad
    if (this.idActividad && !isNaN(Number(this.idActividad))) {
      // Es una actualización
      this.actividad.id = Number(this.idActividad.valueOf());
      console.log('Actualizando actividad...');
      this.activityService.updateActivity(this.actividad);
    } else {
      console.log('Creando actividad...');
      this.activityService.createActivity(this.actividad);
    }
  }
}
