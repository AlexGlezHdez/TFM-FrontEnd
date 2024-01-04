import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ScheduledCourseDTO } from 'src/app/Models/scheduled-course.dto';
import { ScheduledCourseService } from 'src/app/Services/scheduled-course.service';
import { CourseDTO } from 'src/app/Models/course.dto';
import { CourseService } from 'src/app/Services/course.service';
import { ToastService } from 'src/app/Services/toast.service';

@Component({
  selector: 'app-course-schedule-update',
  templateUrl: './course-schedule-update.component.html',
  styleUrls: ['./course-schedule-update.component.scss'],
})
export class CourseScheduleUpdateComponent implements OnInit {
  cursoAgendado!: ScheduledCourseDTO;

  idCursoAgendado: string;

  idCurso: UntypedFormControl;
  fecha: UntypedFormControl;
  detalles: UntypedFormControl;
  courseForm: UntypedFormGroup;

  cursos?: CourseDTO[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: UntypedFormBuilder,
    private scheduledCourseService: ScheduledCourseService,
    private toastService: ToastService,
    private courseService: CourseService
  ) {
    this.idCursoAgendado =
      this.activatedRoute.snapshot.paramMap.get('id') || '';

    this.idCurso = new UntypedFormControl('', [Validators.required]);
    this.fecha = new UntypedFormControl('', [Validators.required]);
    this.detalles = new UntypedFormControl('', [Validators.required]);

    this.courseForm = this.formBuilder.group({
      idCurso: this.idCurso,
      fecha: this.fecha,
      detalles: this.detalles,
    });

    this.cursoAgendado = new ScheduledCourseDTO();
  }

  async ngOnInit() {
    await this.cargarCursos().then(() => {
      if (this.idCursoAgendado) {
        this.scheduledCourseService
          .getCourse(this.idCursoAgendado)
          .then((cursoAgendado) => {
            this.cursoAgendado = cursoAgendado.data;
            this.idCurso.setValue(this.cursoAgendado.curso.id);
            this.fecha.setValue(this.cursoAgendado.fecha.substring(0, 10));
            this.detalles.setValue(this.cursoAgendado.detalles);
          });
      }
    });
  }

  private async cargarCursos(): Promise<void> {
    await this.courseService
      .getCourses()
      .then((cursos) => {
        this.cursos = Object.assign([], cursos.data);
      })
      .catch((resp) => {
        this.toastService.mostrarMensaje('Error al cargar los datos', false);
      });
  }

  enviarDatos(): void {
    this.cursoAgendado.curso.id = this.idCurso.value;
    this.cursoAgendado.fecha = this.fecha.value;
    this.cursoAgendado.detalles = this.detalles.value;

    // Gestionamos si se trata de una actualizacion o de un curso nuevo segun exista idCursoAgendado
    if (this.idCursoAgendado && !isNaN(Number(this.idCursoAgendado))) {
      // Es una actualización
      this.cursoAgendado.id = Number(this.idCursoAgendado.valueOf());
      this.scheduledCourseService
        .updateCourse(this.cursoAgendado)
        .then((resp) => {
          this.toastService
            .mostrarMensaje('Agenda del curso actualizada correctamente', true)
            .then(() => {
              this.router.navigateByUrl('/admin/calendario-cursos');
            });
        })
        .catch((resp) => {
          this.toastService.mostrarMensaje(
            'Error al actualizar la noticia',
            false
          );
        });
    } else {
      this.scheduledCourseService
        .createCourse(this.cursoAgendado)
        .then((resp) => {
          this.toastService
            .mostrarMensaje('Agenda del curso creada correctamente', true)
            .then(() => {
              this.router.navigateByUrl('/admin/calendario-cursos');
            });
        })
        .catch((resp) => {
          this.toastService.mostrarMensaje(
            'Error al crear la agenda del curso',
            false
          );
        });
    }
  }
}
