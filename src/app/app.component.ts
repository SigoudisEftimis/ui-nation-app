import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'nation';

  items: MenuItem[] | undefined;

  constructor(private router: Router) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Actions',
        items: [
          {
            label: 'Home',
            icon: 'pi pi-home',
            command: () => {
              this.router.navigate(['/']);
            },
          },
          {
            label: 'Countries',
            icon: 'pi pi-globe',
            command: () => {
              this.router.navigate(['/countries']);
            },
          },
          {
            label: 'Gdp/Population',
            icon: 'pi pi-percentage',
            command: () => {
              this.router.navigate(['/gdp-population-ratio']);
            },
          },
          {
            label: 'Country Stats',
            icon: 'pi pi-chart-line',
            command: () => {
              this.router.navigate(['/statistics']);
            },
          },
        ],
      },
    ];
  }
}
