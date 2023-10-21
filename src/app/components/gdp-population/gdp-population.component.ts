import { Component, OnInit } from '@angular/core';
import { GdpPopulation } from 'src/app/models/gdp-population';
import { GdpPopulationResponse } from 'src/app/models/responses/gdp-population-response';
import { CountryService } from 'src/app/services/country/country.service';

@Component({
  selector: 'app-gdp-population',
  templateUrl: './gdp-population.component.html',
  styleUrls: ['./gdp-population.component.css'],
})
export class GdpPopulationComponent implements OnInit {
  gdpPopulationdata: GdpPopulation[] = [];
  page: number = 0;
  first: number = 0;
  totalRecords: number = 0;
  loading: boolean = false;
  constructor(private countryService: CountryService) {}

  ngOnInit() {
    this.getCountriesWithMaxGdpPerPopulation();
  }

  getCountriesWithMaxGdpPerPopulation() {
    this.loading = true;
    this.countryService
      .getCountriesWithMaxGdpPerPopulation(this.page, 10)
      .subscribe(
        (data: GdpPopulationResponse) => {
          this.handleCountriesData(data);
        },
        (error) => {
          this.handleError(error);
        }
      );
  }

  private handleCountriesData(data: GdpPopulationResponse) {
    this.totalRecords = data.totalElements;
    this.gdpPopulationdata = data.content;
    this.loading = false;
  }

  private handleError(error: any) {
    console.error('Error loading  gdp population data:', error);
    this.loading = false;
  }

  onPageChange(event: any) {
    this.page = event.page;
    this.first=event.first;
    this.getCountriesWithMaxGdpPerPopulation();
  }
}
