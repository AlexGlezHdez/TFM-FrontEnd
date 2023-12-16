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

@Component({
  selector: 'app-course-schedule-update',
  templateUrl: './course-schedule-update.component.html',
  styleUrls: ['./course-schedule-update.component.scss'],
})
export class CourseScheduleUpdateComponent {
  cursoAgendado!: ScheduledCourseDTO;

  idCursoAgendado: string;

  idCurso: UntypedFormControl;
  fecha: UntypedFormControl;
  detalles: UntypedFormControl;
  courseForm: UntypedFormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: UntypedFormBuilder,
    private scheduledCourseService: ScheduledCourseService
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
  }

  async ngOnInit() {
    if (this.idCursoAgendado) {
      await this.scheduledCourseService
        .getCourse(this.idCursoAgendado)
        .then((cursoAgendado) => {
          this.cursoAgendado = cursoAgendado.data;
          this.idCurso.setValue(this.cursoAgendado.curso.id);
          this.fecha.setValue(this.cursoAgendado.fecha);
          this.detalles.setValue(this.cursoAgendado.detalles);
        });
    } else {
      this.cursoAgendado = new ScheduledCourseDTO();
    }
  }

  enviarDatos(): void {
    this.cursoAgendado.curso.id = this.idCurso.value;
    this.cursoAgendado.fecha = this.fecha.value;
    this.cursoAgendado.detalles = this.detalles.value;

    // Gestionamos si se trata de una actualizacion o de un curso nuevo segun exista idCursoAgendado
    if (this.idCursoAgendado && !isNaN(Number(this.idCursoAgendado))) {
      // Es una actualización
      this.cursoAgendado.id = Number(this.idCursoAgendado.valueOf());
      console.log('Actualizando cursoAgendado...');
      console.log(JSON.stringify(this.cursoAgendado));
      this.scheduledCourseService.updateCourse(this.cursoAgendado);
    } else {
      console.log('Creando cursoAgendado...');
      this.scheduledCourseService.createCourse(this.cursoAgendado);
    }
  }
}
