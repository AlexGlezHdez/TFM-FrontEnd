import { OnInit } from '@angular/core';
import { Component, ViewChild } from '@angular/core';
import { CenterDTO } from 'src/app/Models/center.dto';
import { LocationDTO } from 'src/app/Models/location.dto';
import { CenterService } from 'src/app/Services/center.service';
import { ToastService } from 'src/app/Services/toast.service';
import { Router } from '@angular/router';

import { UntypedFormControl } from '@angular/forms';

import { GoogleMap } from '@angular/google-maps';

@Component({
  selector: 'app-centers-map',
  templateUrl: './centers-map.component.html',
  styleUrls: ['./centers-map.component.scss'],
})
export class CentersMapComponent implements OnInit {
  @ViewChild('myMap') map!: GoogleMap;

  centros!: CenterDTO[];
  filtroCentro: UntypedFormControl;

  // Inicializacion del componente del mapa
  mapZoom = 5.5;
  display: any; // Property to store latitude and longitude data from the map
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

  constructor(
    private centerService: CenterService,
    private toastService: ToastService,
    private router: Router
  ) {
    this.filtroCentro = new UntypedFormControl('');
    this.cargarCentros();
  }

  ngOnInit() {
    this.filtroCentro.valueChanges.subscribe(() => {
      this.cargarCentros();
    });
  }

  private async cargarCentros(): Promise<void> {
    await this.centerService
      .getCenters(this.filtroCentro.value)
      .then((centros) => {
        this.centros = centros.data.map((centro: any) => {
          centro.position = {
            lat: centro.latitud,
            lng: centro.longitud,
          };
          return centro;
        });
      })
      .catch((error) =>
        this.toastService.mostrarMensaje('Error al cargar los centros', false)
      );
  }

  move(event: google.maps.MapMouseEvent) {
    // Method to handle map click event and update the display property
    if (event.latLng != null) {
      this.display = event.latLng.toJSON();
    }
  }

  centrarEnCentroBuceo(posicion: LocationDTO) {
    this.map.panTo(posicion);
    this.router.navigate([], { fragment: 'mapaCentros' });
  }
}
