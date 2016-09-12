import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { SectionComponent } from '../../shared/index';
import {CHART_DIRECTIVES} from 'ng2-charts/ng2-charts';
import { RankedList, Statistics, Statistic} from '../../shared/index';

@Component({
  moduleId: module.id,
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
  directives: [
    ROUTER_DIRECTIVES, SectionComponent, CHART_DIRECTIVES, RankedList
  ],
  viewProviders: [],
})

export class DashboardComponent implements OnInit {

  private topExposures: Statistic[];
  private topExposuresConfig = {"title": "Top 5 Exposures"};
  
  private topMarginCall: Statistic[];
  private topMarginCallConfig = {"title": "Top 5 Margin Call"};


  constructor(private router: Router) {

    this.topExposures = [{ "name": 'CITI-Swap', "value": -50000, "currency": 'usd', "history": undefined },
      { "name": 'AIMCO-Options', "value": -40000, "currency": 'usd', "history": undefined },
      { "name": 'BNP-Swap', "value": -30000, "currency": 'usd', "history": undefined },
      { "name": 'SG-Repo', "value": -20000, "currency": 'usd', "history": undefined },
      { "name": 'RBS-Swap', "value": -10000, "currency": 'usd', "history": undefined }
    ];

    this.topMarginCall = [{ "name": 'CITI-Swap', "value": 50000, "currency": 'usd', "history": undefined },
      { "name": 'AIMCO-Options', "value": 40000, "currency": 'usd', "history": undefined },
      { "name": 'BNP-Swap', "value": 30000, "currency": 'usd', "history": undefined },
      { "name": 'SG-Repo', "value": 20000, "currency": 'usd', "history": undefined },
      { "name": 'RBS-Swap', "value": 10000, "currency": 'usd', "history": undefined }
    ];

  }

  ngOnInit(): void {
  }

  public barChartOptions: any = {
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
  public barChartLabels: string[] = ['1', '2', '3', '4', '5', '6', '7'];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = false;

  public barChartData: any[] = [
    { data: [65, 59, 80, 81, 56, 55, 70], label: 'Series A' }
  ];








}
