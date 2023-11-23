import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CourseDTO } from '../Models/course.dto';

import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private urlApi: string;
  private controller: string;

  private mockupCoursesDataFile: string = '/assets/courses-data.json';

  constructor(private http: HttpClient) {
    this.controller = 'posts';
    this.urlApi = 'http://localhost:3000/' + this.controller;
  }

  getCourses(): Promise<CourseDTO[]> {
    return firstValueFrom(
      this.http.get<CourseDTO[]>(this.mockupCoursesDataFile)
    );
  }

  getCourse(idCurso: string): Promise<CourseDTO[]> {
    return firstValueFrom(
      this.http.get<CourseDTO[]>(this.mockupCoursesDataFile)
    );
  }
}
