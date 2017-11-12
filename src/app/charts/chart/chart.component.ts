import { Component, OnInit, OnDestroy } from '@angular/core';
import { Chart } from 'angular-highcharts';
//import { Observable } from 'rxjs/Observable';
import { Sse } from '../../services/sse.service';
//import * as EventSource from 'eventsource';

declare var EventSource: any;
//eventSource: any = window['EventSource'];

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})

export class ChartComponent {

  chart = new Chart({
      chart: {
        type: 'line'
      },
      title: {
        text: 'Linechart'
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Line 1',
        data: [1, 0, 3, 1, 5, 7]
      }]
    });

  opts = {
    chart: {
        type: 'column'
    },
    title: {
        text: 'World\'s largest cities per 2014'
    },
    subtitle: {
        text: 'Source: <a href="http://en.wikipedia.org/wiki/List_of_cities_proper_by_population">Wikipedia</a>'
    },
    xAxis: {
        type: 'category',
        labels: {
            rotation: -45,
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Population (millions)'
        }
    },
    legend: {
        enabled: false
    },
    tooltip: {
        pointFormat: 'Population in 2008: <b>{point.y:.1f} millions</b>'
    },
    series: [{
        name: 'Population',
        data: [
            ['Shanghai', 23.7],
            ['Lagos', 16.1],
            ['Istanbul', 14.2],
            ['Karachi', 14.0],
            ['Mumbai', 12.5],
            ['Moscow', 12.1],
            ['São Paulo', 11.8],
            ['Beijing', 11.7],
            ['Guangzhou', 11.1],
            ['Delhi', 11.1],
            ['Shenzhen', 10.5],
            ['Seoul', 10.4],
            ['Jakarta', 10.0],
            ['Kinshasa', 9.3],
            ['Tianjin', 9.3],
            ['Tokyo', 9.0],
            ['Cairo', 8.9],
            ['Dhaka', 8.9],
            ['Mexico City', 8.9],
            ['Lima', 8.9]
        ],
        dataLabels: {
            enabled: true,
            rotation: -90,
            color: '#FFFFFF',
            align: 'right',
            format: '{point.y:.1f}', // one decimal
            y: 10, // 10 pixels down from the top
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    }]
  };

   chart2 = new Chart(this.opts);

  // add point to chart serie
  add() {
    this.chart.addPoint(Math.floor(Math.random() * 10));
    this.obs.unsubscribe();
  }

  obs: any;
  constructor(sse: Sse) {
    this.obs = sse.observe('/api/events/').subscribe(  x => this.chart.addPoint(parseInt(x)) );
  }

  ngOnDestroy () {
    this.obs.unsubscribe();
  }


}
