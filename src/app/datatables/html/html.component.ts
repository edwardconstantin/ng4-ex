import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-html',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.css']
})
export class HtmlComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#example').DataTable();
  }

}
