import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roundNumber'
})
export class RoundPipe implements PipeTransform {
  transform(value: number, decimalPlaces: number = 2): string {
    if (isNaN(value) || value === null) {
      return '';
    }

    return value.toFixed(decimalPlaces);
  }
}
