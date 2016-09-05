import { Component, OnInit, Input} from '@angular/core';
import { FigureComponent } from './figure.component';
import { Statistic } from './statistic';
import {CHART_DIRECTIVES} from 'ng2-charts/ng2-charts';

@Component({
  moduleId: module.id,
  selector: "statistics",
  templateUrl: 'statistics.component.html',
  styleUrls: ['statistics.component.css'],
  directives: [
    CHART_DIRECTIVES, FigureComponent
  ],
  viewProviders: [],
})
export class Statistics implements OnInit {

  @Input() datas: Array<Statistic>;

  constructor() { }

  ngOnInit(): void {
  }

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    legend: {
      display: false
    },
    tooltips: {
      enabled: false
    },
    scales: {
      yAxes: [{
        display: false
      }],
      xAxes: [{
        display: false
      }]
    }

  };
  public barChartLabels: string[] = ['1', '2', '3', '4', '5', '6', '7'];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = false;

  public barChartData: any[] = [
    { data: [65, 59, 80, 81, 56, 55, 70], label: 'Series A' }
  ];

}
