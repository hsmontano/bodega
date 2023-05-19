import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Product[], arg: string): Product[] {
    const resultPosts = [];
    for(const prod of value){
      if(prod.nombre!.indexOf(arg) > -1){
        resultPosts.push(prod);
      }
    }
    return resultPosts;
  }

}
