
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryLanguagesComponent } from './country-languages.component';

const routes: Routes = [
  {
    path: '',
    component: CountryLanguagesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountryLanguagesRoutingModule {}
