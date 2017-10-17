import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Subscription }   from 'rxjs/Subscription';
import { Subject }    from 'rxjs/Subject';
import { SearchService } from './search/search.service';

@Injectable()
export class ApiService {

  subscription: Subscription;

    // Observable string sources
  private dataSource = new Subject<any>();

  // Observable string streams
  dataEv$ = this.dataSource.asObservable();

  // Service message commands
/*  searchString(search: string) {
    this.term = search;
    this.dataSource.next(search);
  }*/

  gitData: any;

  constructor(private http: HttpClient, private search: SearchService) {

    this.subscription = search.searchEv$.subscribe( searchStr => {
      this.getData(searchStr).subscribe( data => {
        this.gitData = {
            data: data,
            searchTerm: searchStr
        };
        this.dataSource.next(this.gitData);
      });
    });

  }

  public getData(repo: string) {
    return this.http.get('https://api.github.com/users/' + repo + '/repos')
      //.subscribe(data => {console.log(data) });
  }



}
