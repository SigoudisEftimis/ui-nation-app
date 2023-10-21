import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { SqkmPipe } from './pipes/sqkm.pipe';
import { PopulationPipe } from './pipes/population.pipe';
import { RoundPipe } from './pipes/round.pipe';
@NgModule({
  declarations: [SqkmPipe, PopulationPipe , RoundPipe],
  imports: [ButtonModule, TableModule, PaginatorModule],
  exports: [
    ButtonModule,
    TableModule,
    PaginatorModule,
    SqkmPipe,
    PopulationPipe,
    RoundPipe
  ],
})
export class SharedModule {}
