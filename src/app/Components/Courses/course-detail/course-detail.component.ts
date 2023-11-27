import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseDTO } from 'src/app/Models/course.dto';
import { CourseService } from 'src/app/Services/course.service';

import { Location } from '@angular/common';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss'],
})
export class CourseDetailComponent {
  curso: CourseDTO;

  private idCurso: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private courseService: CourseService,
    private location: Location
  ) {
    this.idCurso = this.activatedRoute.snapshot.paramMap.get('id') || '';
    this.curso = new CourseDTO('', '', '', '', '');
  }

  async ngOnInit(): Promise<void> {
    await this.courseService.getCourse(this.idCurso).then((curso) => {
      this.curso = curso[0];
    });
  }

  back(): void {
    this.location.back();
  }
}
