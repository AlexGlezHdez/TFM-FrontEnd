import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ActivityDTO } from 'src/app/Models/activity.dto';
import { ActivityService } from 'src/app/Services/activity.service';
import { ToastService } from 'src/app/Services/toast.service';

@Component({
  selector: 'app-activity-update',
  templateUrl: './activity-update.component.html',
  styleUrls: ['./activity-update.component.scss'],
})
export class ActivityUpdateComponent implements OnInit {
  @ViewChild('imagenSeleccionada') imagenSeleccionada!: ElementRef;

  actividad!: ActivityDTO;

  idActividad: string;

  titulo: UntypedFormControl;
  imagen: UntypedFormControl;
  descripcion: UntypedFormControl;
  actividadForm: UntypedFormGroup;

  // Variable donde almacenar la posible imagen
  ficheroImagen?: File;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: UntypedFormBuilder,
    private toastService: ToastService,
    private activityService: ActivityService
  ) {
    this.idActividad = this.activatedRoute.snapshot.paramMap.get('id') || '';

    this.titulo = new UntypedFormControl('', [Validators.required]);
    this.descripcion = new UntypedFormControl('', [Validators.required]);
    if (!this.idActividad) {
      this.imagen = new UntypedFormControl(null, [Validators.required]);
    } else {
      this.imagen = new UntypedFormControl(null, []);
    }

    this.actividadForm = this.formBuilder.group({
      titulo: this.titulo,
      descripcion: this.descripcion,
      imagen: this.imagen,
    });

    this.actividad = new ActivityDTO();
  }

  async ngOnInit() {
    if (this.idActividad) {
      await this.activityService
        .getActivity(this.idActividad)
        .then((actividad) => {
          this.actividad = actividad.data;
          this.titulo.setValue(this.actividad.titulo);
          this.descripcion.setValue(this.actividad.descripcion);
          //          this.imagen.setValue(this.actividad.imagen);
          this.imagenSeleccionada.nativeElement.src =
            'assets/images/activities/' + this.actividad.imagen;
        })
        .catch((resp) => {
          this.toastService.mostrarMensaje('Error al cargar los datos', false);
        });
    }
  }

  enviarDatos(): void {
    this.actividad.titulo = this.titulo.value;
    this.actividad.descripcion = this.descripcion.value;
    if (this.imagen.value) {
      this.actividad.imagen = this.imagen.value.name;
    }

    // Gestionamos si se trata de una actualizacion o de una actividad nueva segun exista idActividad
    if (this.idActividad && !isNaN(Number(this.idActividad))) {
      // Es una actualización
      this.actividad.id = Number(this.idActividad.valueOf());
      this.activityService
        .updateActivity(this.actividad, this.ficheroImagen)
        .then((resp) => {
          this.toastService
            .mostrarMensaje('Acividad actualizada correctamente', true)
            .then(() => {
              this.router.navigateByUrl('/admin/actividades');
            });
        })
        .catch((resp) => {
          this.toastService.mostrarMensaje(
            'Error al actualizar la actividad',
            false
          );
        });
    } else {
      this.activityService
        .createActivity(this.actividad, this.ficheroImagen)
        .then((resp) => {
          this.toastService
            .mostrarMensaje('Actividad creada correctamente', true)
            .then(() => {
              this.router.navigateByUrl('/admin/actividades');
            });
        })
        .catch((resp) => {
          this.toastService.mostrarMensaje(
            'Error al crear la actividad',
            false
          );
        });
    }
  }
  onSelect(event: any): void {
    this.ficheroImagen = event.target.files ? event.target.files[0] : null;
    this.actividadForm.patchValue({ imagen: this.ficheroImagen });
    this.actividadForm.get('imagen')?.updateValueAndValidity();

    if (this.ficheroImagen) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target) {
          this.imagenSeleccionada.nativeElement.src = e.target.result;
        }
      };
      reader.readAsDataURL(this.ficheroImagen);
    }
  }
}
