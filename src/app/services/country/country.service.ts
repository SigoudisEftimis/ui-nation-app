import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CountryResponse } from 'src/app/models/responses/country-response';
import { Language } from 'src/app/models/language';
import { GdpPopulationResponse } from 'src/app/models/responses/gdp-population-response';
import { CountryStatsResponse } from 'src/app/models/responses/country-stats-response';
import { HttpUtils } from 'src/app/utils/http-util';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private apiProtocol = environment.apiProtocol;
  private apiHost = environment.apiHost;
  private apiPort = environment.apiPort;
  private apiPathCountries = 'api/countries';

  private baseUrl = `${this.apiProtocol}://${this.apiHost}:${this.apiPort}/${this.apiPathCountries}`;

  constructor(private http: HttpClient) {}

  getCountries(page: number, size: number, sort: string) {
    const params = {
      page: page.toString(),
      size: size.toString(),
      sort: sort,
    };
    return this.http.get<CountryResponse>(this.baseUrl, { params });
  }

  getCountryLanguages(id: number) {
    const url = `${this.baseUrl}/${id}/languages`;
    return this.http.get<Language[]>(url);
  }

  getCountriesWithMaxGdpPerPopulation(page: number, size: number) {
    const params = {
      page: page.toString(),
      size: size.toString(),
    };

    return this.http.get<GdpPopulationResponse>(
      this.baseUrl + '/max-gdp-per-population',
      { params }
    );
  }

  getCountryStats(
    page: number,
    size: number,
    regionId?: number,
    startDate?: number,
    endDate?: number
  ) {
    const queryParams: { [param: string]: string } = {
      page: page.toString(),
      size: size.toString(),
    };

    HttpUtils.addQueryParamIfNotNull(queryParams, 'regionId', regionId);
    HttpUtils.addQueryParamIfNotNull(queryParams, 'startDate', startDate);
    HttpUtils.addQueryParamIfNotNull(queryParams, 'endDate', endDate);

    const params = new HttpParams({ fromObject: queryParams });

    return this.http.get<CountryStatsResponse>(`${this.baseUrl}/stats`, {
      params,
    });
  }
}
