import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: any, transformTo: string): any {
    switch(transformTo) {
      case 'km':
        return value * 1.609344;
      case 'm':
        return value * 1.609344 * 1000;
     case 'cm':
      return value * 1.609344 * 1000 * 1000;
     default: 
      throw new Error('Conversion not defined');   
    }
    
  }
}
