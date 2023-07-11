import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeAcentuacao'
})
export class RemoveAcentuacaoPipe implements PipeTransform {

  transform(value: string): string {
    if(!value){return ''}

    return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

}
