import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {
  transform(heroes: Hero[], sortBy: keyof Hero | "name", sort: "asc" | "desc" = "desc"): Hero[] {
    const order = sort === "asc" ? [1, -1]: [-1, 1]
    return heroes.sort((heroA, heroB) => heroA[sortBy] > heroB[sortBy] ? order[0] :  order[1] )
  }
}
