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
import { CourseDTO } from 'src/app/Models/course.dto';
import { CourseService } from 'src/app/Services/course.service';
import { ToastService } from 'src/app/Services/toast.service';

@Component({
  selector: 'app-course-update',
  templateUrl: './course-update.component.html',
  styleUrls: ['./course-update.component.scss'],
})
export class CourseUpdateComponent implements OnInit {
  @ViewChild('imagenSeleccionada') imagenSeleccionada!: ElementRef;

  curso!: CourseDTO;

  idCurso: string;

  titulo: UntypedFormControl;
  imagen: UntypedFormControl;
  duracion: UntypedFormControl;
  descripcion: UntypedFormControl;
  courseForm: UntypedFormGroup;

  // Variable donde almacenar la posible imagen
  ficheroImagen?: File;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: UntypedFormBuilder,
    private toastService: ToastService,
    private courseService: CourseService
  ) {
    this.idCurso = this.activatedRoute.snapshot.paramMap.get('id') || '';

    this.titulo = new UntypedFormControl('', [Validators.required]);
    this.descripcion = new UntypedFormControl('', [Validators.required]);
    this.duracion = new UntypedFormControl('', [Validators.required]);
    if (!this.idCurso) {
      this.imagen = new UntypedFormControl(null, [Validators.required]);
    } else {
      this.imagen = new UntypedFormControl(null, []);
    }

    this.courseForm = this.formBuilder.group({
      titulo: this.titulo,
      descripcion: this.descripcion,
      duracion: this.duracion,
      imagen: this.imagen,
    });

    this.curso = new CourseDTO();
  }

  async ngOnInit() {
    if (this.idCurso) {
      await this.courseService.getCourse(this.idCurso).then((curso) => {
        this.curso = curso.data;
        this.titulo.setValue(this.curso.titulo);
        this.descripcion.setValue(this.curso.descripcion);
        this.duracion.setValue(this.curso.duracion);
        this.imagen.setValue(this.curso.imagen);
        //        this.imagen.setValue(this.curso.imagen);
        this.imagenSeleccionada.nativeElement.src =
          'assets/images/courses/' + this.curso.imagen;
      });
    }
  }

  enviarDatos(): void {
    this.curso.titulo = this.titulo.value;
    this.curso.descripcion = this.descripcion.value;
    this.curso.duracion = this.duracion.value;
    this.curso.imagen = this.imagen.value.name;

    if (this.idCurso && !isNaN(Number(this.idCurso))) {
      this.curso.id = Number(this.idCurso.valueOf());
      this.courseService
        .updateCourse(this.curso, this.ficheroImagen)
        .then((resp) => {
          this.toastService
            .mostrarMensaje('Curso actualizado correctamente', true)
            .then(() => {
              this.router.navigateByUrl('/admin/cursos');
            });
        })
        .catch((resp) => {
          this.toastService.mostrarMensaje(
            'Error al actualizar el curso',
            false
          );
        });
    } else {
      this.courseService
        .createCourse(this.curso, this.ficheroImagen)
        .then((resp) => {
          this.toastService
            .mostrarMensaje('Curso creado correctamente', true)
            .then(() => {
              this.router.navigateByUrl('/admin/cursos');
            });
        })
        .catch((resp) => {
          this.toastService.mostrarMensaje('Error al crear el curso', false);
        });
    }
  }

  onSelect(event: any): void {
    this.ficheroImagen = event.target.files ? event.target.files[0] : null;
    this.courseForm.patchValue({ imagen: this.ficheroImagen });
    this.courseForm.get('imagen')?.updateValueAndValidity();

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
