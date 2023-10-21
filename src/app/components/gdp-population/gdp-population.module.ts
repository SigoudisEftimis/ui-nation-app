import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GdpPopulationComponent } from './gdp-population.component';
import { GdpPopulationRoutingModule } from './gdp-population-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  imports: [
    CommonModule,
    GdpPopulationRoutingModule,
    SharedModule,
    TooltipModule
  ],
  declarations: [GdpPopulationComponent]
})
export class GdpPopulationModule { }
