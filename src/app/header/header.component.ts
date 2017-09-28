import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'my app';


  constructor() { }

  ngOnInit() {
    $('.navbar-nav a').on('click', function () {
        if (window.innerWidth <= 992) {
            $(".navbar-toggler").click();
        }
    });
  }

}
