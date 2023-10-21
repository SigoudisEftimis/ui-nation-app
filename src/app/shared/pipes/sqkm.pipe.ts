import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sqkm'
})
export class SqkmPipe implements PipeTransform {

  transform(value: number): string {
    if (isNaN(value) || value === null) {
      return '';
    }

    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
      useGrouping: true
    }).format(value);
  }

}
