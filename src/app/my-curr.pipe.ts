import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myCurr',
})
export class MyCurrPipe implements PipeTransform {
  transform(billamt: number): any {
    return '$' + billamt;
  }
}
