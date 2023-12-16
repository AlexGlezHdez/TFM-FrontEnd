import { CourseDTO } from './course.dto';

export class ScheduledCourseDTO {
  id!: number;
  curso: CourseDTO;
  detalles: string;
  fecha: string;

  constructor() {
    this.curso = new CourseDTO();
    this.detalles = '';
    this.fecha = '';
  }
}
