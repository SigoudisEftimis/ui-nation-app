import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryTableComponent } from './country-table.component';
import { CountryTableRoutingModule } from './country-table-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    CountryTableRoutingModule,
    SharedModule
  ],
  declarations: [CountryTableComponent]
})
export class CountryTableModule { }
