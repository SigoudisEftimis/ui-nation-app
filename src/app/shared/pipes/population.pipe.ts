import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'population'
})
export class PopulationPipe implements PipeTransform {
  transform(value: number): string {
    if (isNaN(value) || value === null) {
      return '';
    }

    return value.toLocaleString('en-US');
  }
}
