import { Injectable, Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription }   from 'rxjs/Subscription';
import { ApiService } from '../services/api.service';
import { SearchService } from '../services/search/search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: []
})

export class HomeComponent implements OnInit, OnDestroy {

  results: any;
  account = '';
  subscription: Subscription;
  searchSubscription: Subscription;

  constructor(api: ApiService, search: SearchService) {


    //this.searchSubscription = search.searchEv$.subscribe( searchStr => this.account = searchStr );

    this.subscription = api.dataEv$.subscribe( response => {
      this.results = response.data;
      this.account = response.searchTerm;
    });


  }

  ngOnInit() {}

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

}
