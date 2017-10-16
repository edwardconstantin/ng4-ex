import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class SearchService {

  term: string;

  // Observable string sources
  private searchSource = new Subject<string>();

  // Observable string streams
  searchEv$ = this.searchSource.asObservable();

  // Service message commands
  searchString(search: string) {
    this.term = search;
    this.searchSource.next(search);
  }

  constructor() { }

}
