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
    ROUTER_DIRECTIVES, SectionComponent, CHART_DIRECTIVES, RankedList, Statistics
  ],
  viewProviders: [],
})

export class DashboardComponent implements OnInit {

  private topExposures: Statistic[];
  private topExposuresConfig = {"title": "Top 5 Exposures"};
  
  private topMarginCall: Statistic[];
  private topMarginCallConfig = {"title": "Top 5 Margin Call"};

  private disputes: Statistic[];
  private disputesConfig = {"title": "Disputes"};

  private statistics: Statistic[];



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

    this.disputes = [{ "name": 'HSBC-Swap', "value": 50000, "currency": 'usd', "history": undefined },
      { "name": 'LCH-Options', "value": 40000, "currency": 'usd', "history": undefined },
      { "name": 'Santander-Swap', "value": 30000, "currency": 'usd', "history": undefined },
      { "name": 'Santander-Repo', "value": 20000, "currency": 'usd', "history": undefined },
      { "name": 'BlueCrest-Swap', "value": 10000, "currency": 'usd', "history": undefined }
    ];

    this.statistics = [ {"name" : 'Total Exposure', "value" : -2600000, "currency" : 'usd', "history": undefined}, 
                        {"name" : 'Total Collateral', "value" : 3500000, "currency" : 'usd', "history": undefined}, 
                      {"name" : 'Trades', "value" : 243000, "currency" : undefined, "history": undefined}, 
                      {"name" : 'Contracts', "value" : 522, "currency" : undefined, "history": undefined}, 
                      {"name" : 'Disputes', "value" : 12, "currency" : undefined, "history": undefined}
                      ];

  }

  ngOnInit(): void {
  }

  private exposureHistoryDatas = [
    {
      label: "Exposure",
      data: [120, 190, 3, 5, 20, 30]
    }
  ];
  private exposureHistoryLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  private exposureHistoryOptions = {
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };

  private statusDatas = [
    {
      label: "statusDatas",
      data: [12, 3, 5, 20, 30]
    }
  ];
  
  private statusLabels = ['PRICED', 'ALLOCATED', 'DISPUTED', 'VALIDATED', 'EXECUTED'];
  
  private statusOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    legend: {
      display: true
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









}
