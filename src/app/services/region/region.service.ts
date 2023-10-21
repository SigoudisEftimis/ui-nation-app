import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Region } from 'src/app/models/region';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RegionService {
  private apiProtocol = environment.apiProtocol;
  private apiHost = environment.apiHost;
  private apiPort = environment.apiPort;
  private apiPathRegions = 'api/regions';

  private baseUrl = `${this.apiProtocol}://${this.apiHost}:${this.apiPort}/${this.apiPathRegions}`;

  constructor(private http: HttpClient) {}

  getRegions(): Observable<Region[]> {
    return this.http.get<Region[]>(this.baseUrl);
  }
}
