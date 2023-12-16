import { Component } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseDTO } from 'src/app/Models/course.dto';
import { CourseService } from 'src/app/Services/course.service';

@Component({
  selector: 'app-course-update',
  templateUrl: './course-update.component.html',
  styleUrls: ['./course-update.component.scss'],
})
export class CourseUpdateComponent {
  curso!: CourseDTO;

  idCurso: string;

  titulo: UntypedFormControl;
  imagen: UntypedFormControl;
  duracion: UntypedFormControl;
  descripcion: UntypedFormControl;
  courseForm: UntypedFormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: UntypedFormBuilder,
    private courseService: CourseService
  ) {
    this.idCurso = this.activatedRoute.snapshot.paramMap.get('id') || '';

    this.titulo = new UntypedFormControl('', [Validators.required]);
    this.descripcion = new UntypedFormControl('', [Validators.required]);
    this.duracion = new UntypedFormControl('', [Validators.required]);
    this.imagen = new UntypedFormControl('', [Validators.required]);

    this.courseForm = this.formBuilder.group({
      titulo: this.titulo,
      descripcion: this.descripcion,
      duracion: this.duracion,
      imagen: this.imagen,
    });
  }

  async ngOnInit() {
    if (this.idCurso) {
      await this.courseService.getCourse(this.idCurso).then((curso) => {
        this.curso = curso.data;
        this.titulo.setValue(this.curso.titulo);
        this.descripcion.setValue(this.curso.descripcion);
        this.duracion.setValue(this.curso.duracion);
        this.imagen.setValue(this.curso.imagen);
      });
    } else {
      this.curso = new CourseDTO();
    }
  }

  enviarDatos(): void {
    this.curso.titulo = this.titulo.value;
    this.curso.descripcion = this.descripcion.value;
    this.curso.duracion = this.duracion.value;
    this.curso.imagen = this.imagen.value;

    // Gestionamos si se trata de una actualizacion o de una curso nueva segun exista idCurso
    if (this.idCurso && !isNaN(Number(this.idCurso))) {
      // Es una actualización
      this.curso.id = Number(this.idCurso.valueOf());
      console.log('Actualizando curso...');
      console.log(JSON.stringify(this.curso));
      this.courseService.updateCourse(this.curso);
    } else {
      console.log('Creando curso...');
      this.courseService.createCourse(this.curso);
    }
  }
}
