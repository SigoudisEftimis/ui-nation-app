import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryStatsComponent } from './country-stats.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CountryStatsRoutingModule } from './country-stats-routing.module';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CountryStatsRoutingModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [CountryStatsComponent],
})
export class CountryStatsModule {}
