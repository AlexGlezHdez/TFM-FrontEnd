export class ActivityDTO {
  idActividad!: number;
  actividad: string;
  descripcion: string;
  descripcion_extra: string;
  plazas_disponibles: number;
  imagen: string;
  fecha_actividad: string;

  constructor(
    actividad: string,
    descripcion: string,
    descripcion_extra: string,
    imagen: string,
    fecha_actividad: string,
    plazas_disponibles: number
  ) {
    this.actividad = actividad;
    this.descripcion = descripcion;
    this.descripcion_extra = descripcion_extra;
    this.imagen = imagen;
    this.fecha_actividad = fecha_actividad;
    this.plazas_disponibles = plazas_disponibles;
  }
}
