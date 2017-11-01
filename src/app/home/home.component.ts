import { Injectable, Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription }   from 'rxjs/Subscription';
import { ApiService } from '../services/api.service';
import { SearchService } from '../services/search/search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, OnDestroy {

  results: any;
  account = '';
  subscription: Subscription;
  searchSubscription: Subscription;
  isLoading = false;

  constructor(api: ApiService, search: SearchService) {

    this.searchSubscription = search.searchEv$.subscribe( searchStr => {
      this.isLoading = true;
    });

    if (api.gitData) {
      this.results = api.gitData.data;
      this.account = api.gitData.searchTerm;
    } else {
      search.searchString('angular');
    }

    this.subscription = api.dataEv$.subscribe( response => {
      this.results = response.data;
      this.account = response.searchTerm;
      this.isLoading = false;
    });

  }

  ngOnInit() {}

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

}
