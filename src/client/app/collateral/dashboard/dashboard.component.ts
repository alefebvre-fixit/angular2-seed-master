import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { SectionComponent } from '../../shared/index';
import {CHART_DIRECTIVES} from 'ng2-charts/ng2-charts';

@Component({
  moduleId: module.id,
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
  directives: [
    ROUTER_DIRECTIVES,SectionComponent,CHART_DIRECTIVES
  ],
  viewProviders: [],
})

export class DashboardComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true,
    legend: {
      display: false
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
  public barChartLabels:string[] = ['1', '2', '3', '4', '5', '6', '7'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = false;

  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 70], label:'Series A'}
  ];


}
