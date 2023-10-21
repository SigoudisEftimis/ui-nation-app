import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { CountryStats } from 'src/app/models/country-stats';
import { Region } from 'src/app/models/region';
import { CountryStatsResponse } from 'src/app/models/responses/country-stats-response';
import { CountryService } from 'src/app/services/country/country.service';
import { RegionService } from 'src/app/services/region/region.service';
import { YearUtils } from 'src/app/utils/year-util';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-country-stats',
  templateUrl: './country-stats.component.html',
  styleUrls: ['./country-stats.component.css'],
})
export class CountryStatsComponent implements OnInit {
  filterForm: FormGroup;
  years: number[] = YearUtils.generateYears(
    environment.startYear,
    environment.endYear
  );
  regions: Region[] = [];
  totalRecords: number = 0;
  countryStats: CountryStats[] = [];
  loading: boolean = false;
  first: number = 0;
  page: number = 0;

  constructor(
    private regionService: RegionService,
    private countryService: CountryService,
    private formBuilder: FormBuilder
  ) {
    this.filterForm = this.formBuilder.group({
      fromYear: new FormControl(),
      toYear: new FormControl(),
      selectedRegion: new FormControl(),
    });
  }

  ngOnInit() {
    this.getRegions();
    this.initSearch();
  }

  getRegions() {
    this.regionService.getRegions().subscribe(
      (data: Region[]) => {
        this.regions = data;
      },
      (error: HttpErrorResponse) => {
        this.handleError(error);
      }
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred while fetching regions.', error);
  }

  initSearch() {
    this.loading = true;

    const regionId = this.filterForm.get('selectedRegion')?.value;
    const startDate = this.filterForm.get('fromYear')?.value;
    const endDate = this.filterForm.get('toYear')?.value;

    this.countryService
      .getCountryStats(this.page, 10, regionId, startDate, endDate)
      .subscribe(
        (data: CountryStatsResponse) => {
          this.handleCountryStats(data);
        },
        (error: HttpErrorResponse) => {
          this.handleSearchError(error);
        }
      );
  }

  private handleCountryStats(data: CountryStatsResponse) {
    this.totalRecords = data.totalElements;
    this.countryStats = data.content;
    this.loading = false;
  }

  private handleSearchError(error: HttpErrorResponse) {
    console.error(
      'An error occurred while fetching country statistics.',
      error
    );
    this.loading = false;
  }

  onPageChange(event: any) {
    this.first = event.first;
    this.page = event.page;
    this.initSearch();
  }

  resetSearch() {
    this.page = 0;
    this.first = 0;
    this.filterForm.reset();
    this.initSearch();
  }
}
