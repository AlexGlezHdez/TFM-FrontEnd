import { Component } from '@angular/core';

@Component({
  selector: 'app-centers-map',
  templateUrl: './centers-map.component.html',
  styleUrls: ['./centers-map.component.scss'],
})
export class CentersMapComponent {
  ngOnInit(): void {}
  display: any; // Property to store latitude and longitude data from the map

  mapOptions: google.maps.MapOptions = {
    center: {
      // Initial center coordinates for the map
      lat: 40.416775,
      lng: -3.70379,
    },
    zoom: 5.5, // Initial zoom level for the map
    disableDefaultUI: true,
  };

  markerOptions: google.maps.MarkerOptions = {
    draggable: false,
  };
  markerPositions: google.maps.LatLngLiteral[] = [];
  addMarker(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.markerPositions.push(event.latLng.toJSON());
  }

  marker1 = { position: { lat: 38.9987208, lng: -77.2538699 } };
  marker2 = { position: { lat: 39.7, lng: -76.0 } };
  marker3 = { position: { lat: 37.9, lng: -76.8 } };

  markers = [this.marker1, this.marker2, this.marker3];

  move(event: google.maps.MapMouseEvent) {
    // Method to handle map click event and update the display property
    if (event.latLng != null) {
      this.display = event.latLng.toJSON();
    }
  }
}
