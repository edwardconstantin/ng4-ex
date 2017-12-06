import { Component, Input, OnInit } from '@angular/core';
import { Router }   from '@angular/router';
import { SearchService } from '../services/search/search.service';

declare var $ :any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'my app';

   @Input() routes: any;

  constructor(private searchService: SearchService, private router: Router) {}

  // Called by Git Search button or pressing Enter to submit
  gitSearch(ev) {
    ev.preventDefault();
    this.searchService.searchString(ev.target.elements[0].value);
    this.router.navigate(['/home']);
  }

  ngOnInit() {
    // Just to force close menu in mobile view
    var navMain = $(".navbar-collapse"); // avoid dependency on #id
    navMain.on("click", "button, a:not([data-toggle])", null, function () {
      navMain.collapse('hide');
    });
  }

}
