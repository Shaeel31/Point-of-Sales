import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Search'
})
export class SearchPipe implements PipeTransform {

  transform(products: any[], searchInput: string): any[] {
    if (!searchInput) {
      return [];
    }
    searchInput = searchInput.toLowerCase();
    return products.filter(
      x => x.toLowerCase().includes(searchInput)
    )
  }

}
