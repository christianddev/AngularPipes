import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toggleCase'
})

export class ToggleCasePipe implements PipeTransform {
  transform(value: string, toUppercase: boolean = false): string {
    if (toUppercase) {

      return value.toUpperCase();
    }

    return value.toLowerCase();
  }
}
