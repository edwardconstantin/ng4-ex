import { Component, OnInit } from '@angular/core';
import { Router }   from '@angular/router';
import { SearchService } from '../services/search/search.service';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: []
})
export class HeaderComponent implements OnInit {

  title = 'my app';

  constructor(private searchService: SearchService, private router: Router) {

  }

  gitSearch(term: HTMLInputElement) {
    this.router.navigate(['/home']);
    //this.$state.go('home');
    this.searchService.searchString(term.value);
    //console.log( term.value );
  }

  ngOnInit() {
    $('.navbar-nav a, button.btn').on('click', function () {
        if (window.innerWidth <= 992) {
            $(".navbar-toggler").click();
        }
    });
  }

}
