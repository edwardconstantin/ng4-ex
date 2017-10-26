import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription }   from 'rxjs/Subscription';

declare var $: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  csv_data: any;
  table: any;

  constructor(private http: HttpClient) {
    //http.get('assets/edwardconstantin.json').subscribe(data => {console.log(data) });
  }

  ngOnInit() {

    $('#example').DataTable();

    this.table = $('#csv-table').DataTable({
      columns: [{
          "title": "ID",
          "data": "id"
      }, {
          "title": "First Name",
          "data": "first_name"
      }, {
          "title": "Last Name",
          "data": "last_name"
      }, {
          "title": "E-mail",
          "data": "email"
      }, {
          "title": "Gender",
          "data": "gender"
      }]
    });

    this.http.get('assets/mock.csv', {responseType: 'text'})
      .subscribe(data => {
        this.csv_data = $.csv.toObjects(data);
        this.table.rows.add(this.csv_data).draw();
        //this.table.rows.add(data).draw();
        //debugger;
        console.log(this.csv_data)
      }
    );

  }

}
