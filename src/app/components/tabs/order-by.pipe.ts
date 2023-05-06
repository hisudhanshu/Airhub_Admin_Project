import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(array: any[], key: string, reverse: boolean): any[] {
    if (!array || !key) return array;

    return array.sort((a: any, b: any) => {
      let x = a[key];
      let y = b[key];
      if (typeof x === 'string') {
        x = x.toLowerCase();
      }
      if (typeof y === 'string') {
        y = y.toLowerCase();
      }
      if (reverse) {
        return y > x ? 1 : -1;
      } else {
        return x > y ? 1 : -1;
      }
    });
  }

}
