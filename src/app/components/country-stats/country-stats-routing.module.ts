
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryStatsComponent } from './country-stats.component';

const routes: Routes = [
  {
    path: '',
    component: CountryStatsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountryStatsRoutingModule {}
