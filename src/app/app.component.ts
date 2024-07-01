import { Component } from '@angular/core';
import { GraphhopperService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  start: { lat: number; lng: number } = { lat: 40.7128, lng: -74.0060 };
  end: { lat: number; lng: number } = { lat: 40.7142, lng: -74.0060 };
  route: any;

  constructor(private graphhopperService: GraphhopperService) { }

  async getRoute() {
    try {
      this.route = await this.graphhopperService.getRoute(this.start, this.end).toPromise();
      console.log(this.route);
    } catch (error) {
      console.error('Erro ao obter a rota:', error);
    }
  }
}
