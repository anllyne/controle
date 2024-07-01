import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraphhopperService {

  private readonly apiUrl = 'https://graphhopper.com/api/1/route';

  constructor(private http: HttpClient) { }

  getRoute(start: { lat: number; lng: number }, end: { lat: number; lng: number }): Observable<any> {
    const queryParams = new URLSearchParams();
    queryParams.set('point', `${start.lat},${start.lng}`);
    queryParams.set('point', `${end.lat},${end.lng}`);
    queryParams.set('vehicle', 'car');
    queryParams.set('locale', 'pt_BR');
    queryParams.set('instructions', 'false');
    queryParams.set('key', environment.graphhopper.apiKey);

    const url = `${this.apiUrl}?${queryParams.toString()}`;

    return this.http.get<any>(url);
  }
}
