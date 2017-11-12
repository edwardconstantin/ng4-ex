import { Component, OnInit } from '@angular/core';

declare var TradingView :any;
declare var window :any;

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {

  chart: any;

  symbol: string;

  constructor() { }

  ngOnInit() {

    this.chart = new TradingView.widget({
      "container_id": "myWidgetContainer",
      "autosize": true,
      "symbol": "NASDAQ:AAPL",
      "interval": "D",
      "timezone": "Etc/UTC",
      "theme": "White",
      "style": "1",
      "locale": "en",
      "toolbar_bg": "#f1f3f6",
      "enable_publishing": false,
      "allow_symbol_change": true,
      "hideideas": true,
      "show_popup_button": true,
      "popup_width": "1000",
      "popup_height": "650",
        /*"studies": [
          "BB@tv-basicstudies",
          "CCI@tv-basicstudies"
        ],*/
    "drawings_access": {
        "type": "black",
        "tools": [
            { "name": "Regression Trend" },
            { "name": "Trend Angle", "grayed": true },
        ]
    },
    "studies_access": {
        "type": "black",
        "tools": [
            { "name": "Aroon" },
            { "name": "Balance of Power", "grayed": true },
        ]
    }
    });

    window.chart = this.chart;
    this.symbol = this.chart.options.symbol;


    //debugger;
  //console.log(this.chart);

  }

}

