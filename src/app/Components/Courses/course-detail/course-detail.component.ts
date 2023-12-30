import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ScheduledCourseDTO } from 'src/app/Models/scheduled-course.dto';
import { ScheduledCourseService } from 'src/app/Services/scheduled-course.service';
import { ToastService } from 'src/app/Services/toast.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss'],
})
export class CourseDetailComponent implements OnInit {
  cursoAgendado: ScheduledCourseDTO;

  private idCurso: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private scheduledCourseService: ScheduledCourseService,
    private location: Location,
    private toastService: ToastService
  ) {
    this.idCurso = this.activatedRoute.snapshot.paramMap.get('id') || '';
    this.cursoAgendado = new ScheduledCourseDTO();
  }

  async ngOnInit(): Promise<void> {
    await this.scheduledCourseService
      .getCourse(this.idCurso)
      .then((curso) => {
        this.cursoAgendado = curso.data;
      })
      .catch(() =>
        this.toastService.mostrarMensaje(
          'Error al cargar los detalles del curso',
          false
        )
      );
  }

  back(): void {
    this.location.back();
  }
}
