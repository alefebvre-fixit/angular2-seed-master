import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'removeUndefined'})
export class RemoveUndefined implements PipeTransform {
  transform(value: any): any {

      if (value == undefined){
          return '-';
      }
      
      return value;
  }
}