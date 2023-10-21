import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryLanguagesComponent } from './country-languages.component';
import { CardModule } from 'primeng/card';
import { CountryLanguagesRoutingModule } from './country-languages-routing.module';
@NgModule({
  imports: [
    CommonModule,
    CountryLanguagesRoutingModule,
    CardModule
  ],
  declarations: [CountryLanguagesComponent]
})
export class CountryLanguagesModule { }


