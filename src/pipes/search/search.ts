import { Pipe, PipeTransform } from '@angular/core';

/**
 * Define a implementacao do Pipe (filtro, busca..etc)
 *
 * @author maycon
 */
@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  /**
   * dada uma lista, procura o 'terms'
   */
  transform(items: any[], terms: string) {
    if(!items) return [];
    if(!terms) return items;
    terms = terms.toLowerCase();

    return items.filter( it => {
      return it.nome_cliente.toLowerCase().includes(terms); // procurando soment att ->  nome_cliente
    });
  }
}
