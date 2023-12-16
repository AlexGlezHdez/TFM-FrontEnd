import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScheduledCourseDTO } from 'src/app/Models/scheduled-course.dto';
import { ScheduledCourseService } from 'src/app/Services/scheduled-course.service';

import { Location } from '@angular/common';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss'],
})
export class CourseDetailComponent {
  cursoAgendado: ScheduledCourseDTO;

  private idCurso: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private scheduledCourseService: ScheduledCourseService,
    private location: Location
  ) {
    this.idCurso = this.activatedRoute.snapshot.paramMap.get('id') || '';
    this.cursoAgendado = new ScheduledCourseDTO();
  }

  async ngOnInit(): Promise<void> {
    await this.scheduledCourseService.getCourse(this.idCurso).then((curso) => {
      this.cursoAgendado = curso.data;
    });
  }

  back(): void {
    this.location.back();
  }
}
