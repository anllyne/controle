import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { GraphhopperService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements AfterViewInit {
  activeSlide = 1;
  totalSlides = 3;

  map!: L.Map;
  start: { lat: number; lng: number } = { lat: 40.7128, lng: -74.0060 };
  end: { lat: number; lng: number } = { lat: 40.7142, lng: -74.0060 };
  routeLayer: L.LayerGroup;

  constructor(private graphhopperService: GraphhopperService) {
    this.routeLayer = L.layerGroup();
  }

  ngAfterViewInit(): void {
    this.initMap();
    this.getRoute();
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [this.start.lat, this.start.lng],
      zoom: 13,
      scrollWheelZoom: false,
      touchZoom: false,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(this.map);

    L.marker([this.start.lat, this.start.lng]).addTo(this.map)
      .bindPopup('Início')
      .openPopup();
    L.marker([this.end.lat, this.end.lng]).addTo(this.map)
      .bindPopup('Fim')
      .openPopup();
  }

  private getRoute(): void {
    this.graphhopperService.getRoute(this.start, this.end).subscribe(
      routeData => this.showRoute(routeData),
      error => console.error('Erro ao obter a rota:', error)
    );
  }

  private showRoute(routeData: any): void {
    if (routeData && routeData.paths && routeData.paths.length > 0) {
      const path = routeData.paths[0];
      
      if (path.points && path.points.coordinates) {
        const coordinates = path.points.coordinates.map((coord: number[]) => [coord[1], coord[0]]);
        
        const polyline = L.polyline(coordinates, { color: 'blue' }).addTo(this.routeLayer);
        this.routeLayer.addTo(this.map);
        this.map.fitBounds(polyline.getBounds());
      } else {
        console.error('Os dados da rota não contêm pontos de coordenadas:', path);
      }
    } else {
      console.error('Os dados da rota não estão no formato esperado:', routeData);
    }
  }

  prevSlide() {
    if (this.activeSlide > 1) {
      this.activeSlide--;
    }
  }

  nextSlide() {
    if (this.activeSlide < this.totalSlides) {
      this.activeSlide++;
    }
  }
}
