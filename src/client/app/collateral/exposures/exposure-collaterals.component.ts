import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { CollateralService } from '../../services/index';
import { Collateral } from '../../models/index';
import {CHART_DIRECTIVES} from 'ng2-charts/ng2-charts';

import { GridConfiguration, GridComponent } from '../../shared/index';
import { FigureComponent, Statistics, Statistic, CollateralStatisticFactory} from '../../shared/index';

@Component({
  moduleId: module.id,
  selector: "exposure-collaterals",
  templateUrl: 'exposure-collaterals.component.html',
  styleUrls: ['exposure-collaterals.component.css'],
  directives: [
    ROUTER_DIRECTIVES, CHART_DIRECTIVES, GridComponent, Statistics
  ],
  viewProviders: [CollateralService],
})

export class ExposureCollateralsComponent implements OnInit {

  private collaterals: Object[];
  private config: GridConfiguration;
  private statistics: Statistic[];

  constructor(private router: Router, private collateralService: CollateralService) {

    this.config = new GridConfiguration(
      [{ "name": "name", "header": "Name" },
        { "name": "code", "header": "Code" },
        { "name": "type", "header": "Type" },
        { "name": "category", "header": "Category" },
        { "name": "value", "header": "Value" }
      ]);

    this.config.view = false;
    this.config.edit = false;

  }

  ngOnInit(): void {
    this.loadCollaterals();
  }

  loadCollaterals(): void {
      this.collateralService.collaterals$.subscribe((collaterals: Collateral[]) => {
      this.collaterals = collaterals;
      this.statistics = CollateralStatisticFactory.create(collaterals);

      CollateralStatisticFactory.valueByCategory(collaterals);


    });
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
  public barChartLabels:string[] = ['1', '2', '3', '4'];
  public barChartType:string = 'doughnut';
  public barChartLegend:boolean = false;

  public barChartData:any[] = [
    {data: [20, 30, 45, 5], label:'Series A'}
  ];

}
