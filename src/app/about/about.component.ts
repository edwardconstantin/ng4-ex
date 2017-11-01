import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {



  constructor(private http: HttpClient) {
    //http.get('assets/edwardconstantin.json').subscribe(data => {console.log(data) });
    //http.get('https://spreadsheets.google.com/feeds/list/0AnILSHKewmfQdGMzNXZucTJ3SVRkTHZjd2RpODBrOXc/od6/public/basic?alt=json').subscribe(data => {console.log(data) });
  }

  ngOnInit() {

  }

}
