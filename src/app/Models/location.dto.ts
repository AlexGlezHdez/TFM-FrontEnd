export class LocationDTO {
  lat: number;
  lng: number;

  constructor(latitud: number, longitud: number) {
    this.lat = latitud;
    this.lng = longitud;
  }
}
