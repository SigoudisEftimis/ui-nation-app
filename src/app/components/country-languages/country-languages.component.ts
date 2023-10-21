import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Language } from 'src/app/models/language';
import { CountryService } from 'src/app/services/country/country.service';

@Component({
  selector: 'app-country-languages',
  templateUrl: './country-languages.component.html',
  styleUrls: ['./country-languages.component.css'],
})
export class CountryLanguagesComponent implements OnInit {
  languages: Language[] = [];
  loading: boolean = false;

  constructor(
    private countryService: CountryService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = +params['id'];
      this.loadLanguages(id);
    });
  }

  loadLanguages(id: number) {
    this.loading = true;
    this.countryService.getCountryLanguages(id).subscribe(
      (data: Language[]) => {
        this.handleSuccess(data);
      },
      (error) => {
        this.handleError(error);
      }
    );
  }

  private handleSuccess(data: Language[]) {
    this.languages = data;
    this.loading = false;
  }

  private handleError(error: any) {
    console.error('An error occurred while loading languages:', error);

    this.loading = false;
  }

  getTagClass(official: number): string {
    return official === 1 ? 'official' : 'unofficial';
  }

}
