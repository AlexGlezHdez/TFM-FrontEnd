import { ActivityDTO } from './activity.dto';

export class ScheduledActivityDTO {
  id!: number;
  actividad: ActivityDTO;
  detalles: string;
  plazas: number;
  fecha: string;

  constructor() {
    this.actividad = new ActivityDTO();
    this.detalles = '';
    this.fecha = '';
    this.plazas = 0;
  }
}
