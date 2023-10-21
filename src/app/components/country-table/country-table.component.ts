import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/models/country';
import { CountryResponse } from 'src/app/models/responses/country-response';
import { PageEvent } from 'src/app/models/shared/page-event';
import { CountryService } from 'src/app/services/country/country.service';

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
  styleUrls: ['./country-table.component.css'],
})
export class CountryTableComponent implements OnInit {
  countries: Country[] = [];
  page: number = 0;
  first: number= 0;
  totalRecords: number = 0;
  loading: boolean = false;

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.loadCountries();
  }

  loadCountries() {
    this.loading = true;
    this.countryService.getCountries(this.page, 10, 'name').subscribe(
      (data: CountryResponse) => {
        this.handleCountriesData(data);
      },
      (error) => {
        this.handleError(error);
      }
    );
  }

  private handleCountriesData(data: CountryResponse) {
    this.totalRecords = data.totalElements;
    this.countries = data.content;
    this.loading = false;
  }

  private handleError(error: any) {
    console.error('Error loading countries:', error);
    this.loading = false;
  }

  onPageChange(event: any) {
    this.first=event.first;
    this.page = event.page;
    this.loadCountries();
  }
}
