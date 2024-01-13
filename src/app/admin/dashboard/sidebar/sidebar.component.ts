import { Component } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { Chart } from 'angular-highcharts';
import { ChartModule } from 'angular-highcharts';

@Component({
	selector: 'ngbd-nav-vertical',
	standalone: true,
	imports: [NgbNavModule, NgbNavModule,ChartModule],
  styleUrl: './sidebar.component.css',
	templateUrl: './sidebar.component.html',
})
export class NgbdNavVertical {
	active = 'top';
  title = 'angular-charts-youtube';


  lineChart=new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'New Users'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Users Entered',
        data: [10, 2, 3,6,9,17,20,10,5,2,16]
      } as any
    ]

  })

  pieChart=new Chart({
    chart: {
      type: 'pie',
      plotShadow: false,
    },

    credits: {
      enabled: false,
    },

    plotOptions: {
      pie: {
        innerSize: '99%',
        borderWidth: 10,
        borderColor: '',
        slicedOffset: 10,
        dataLabels: {
          connectorWidth: 0,
        },
      },
    },

    title: {
      verticalAlign: 'middle',
      floating: true,
      text: 'Tags Trafic',
    },

    legend: {
      enabled: false,
    },

    series: [
      {
        type: 'pie',
        data: [
          { name: 'Technology', y: 1, color: '#eeeeee' },

          { name: 'Environment', y: 2, color: '#393e46' },

          { name: 'HR Topics', y: 3, color: '#00adb5' },
          { name: 'News', y: 4, color: '#eeeeee' },
          { name: 'Beauty', y: 5, color: '#506ef9' },
        ],
      },
    ],
  })
}
