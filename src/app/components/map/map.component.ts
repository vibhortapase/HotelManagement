import { AfterViewInit, Component, Input } from '@angular/core';
import { SharedModule } from '../../SharedModule';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  imports: [SharedModule],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements AfterViewInit {
  @Input() latitude: number = 0;
  @Input() longitude: number = 0;

  private map!: L.Map;

  ngAfterViewInit(): void {
    const customIcon = L.icon({
      iconUrl: 'assets/marker-icon.png', // your red icon or any image
      iconRetinaUrl: 'assets/marker-icon.png',
      iconSize: [45, 65],       // Adjust size as needed
      iconAnchor: [20, 65],     // Bottom center anchor
      popupAnchor: [0, -60]     // Adjust popup position
    });

    this.map = L.map('map').setView([this.latitude, this.longitude], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    L.marker([this.latitude, this.longitude], { icon: customIcon })
      .addTo(this.map)
      .bindPopup('Hotel Location')
      .openPopup();
  }


}
