import { Component, ViewChild } from '@angular/core';
import { CenterDTO } from 'src/app/Models/center.dto';
import { LocationDTO } from 'src/app/Models/location.dto';
import { CenterService } from 'src/app/Services/center.service';

import { GoogleMap } from '@angular/google-maps';

@Component({
  selector: 'app-centers-map',
  templateUrl: './centers-map.component.html',
  styleUrls: ['./centers-map.component.scss'],
})
export class CentersMapComponent {
  @ViewChild('myMap') map!: GoogleMap;

  mapZoom = 5.5;

  ngOnInit(): void {}
  display: any; // Property to store latitude and longitude data from the map

  centros!: CenterDTO[];

  // Inicializacion del componente del mapa

  mapOptions: google.maps.MapOptions = {
    center: {
      // Initial center coordinates for the map
      lat: 40.416775,
      lng: -3.70379,
    },
    disableDefaultUI: true,
  };

  markerOptions: google.maps.MarkerOptions = {
    draggable: false,
  };
  markerPositions: google.maps.LatLngLiteral[] = [];
  addMarker(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.markerPositions.push(event.latLng.toJSON());
  }

  constructor(private centerService: CenterService) {
    this.cargarCentros();
  }

  private async cargarCentros(): Promise<void> {
    await this.centerService.getCenters().then((centros) => {
      this.centros = centros.data.map((centro: any) => {
        centro.position = {
          lat: centro.latitud,
          lng: centro.longitud,
        };
        return centro;
      });
    });
    //        .catch((error) => this.sharedService.errorLog(error.error));
  }

  move(event: google.maps.MapMouseEvent) {
    // Method to handle map click event and update the display property
    if (event.latLng != null) {
      this.display = event.latLng.toJSON();
    }
  }

  centrarEnCentroBuceo(posicion: LocationDTO) {
    this.map.panTo(posicion);
  }
}
