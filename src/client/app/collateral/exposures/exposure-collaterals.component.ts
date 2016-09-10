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

  private collaterals: Collateral[];
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

        //load chart by category      
        let categories = CollateralStatisticFactory.valueByCategory(collaterals);
        this.categoryChartLabels = categories.labels; 
        this.categoryChartData[0].data = categories.values; 

        //load chart by type
        let types = CollateralStatisticFactory.valueByType(collaterals);
        this.typeChartLabels = types.labels; 
        this.typeChartData[0].data = types.values; 
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
  public barChartType:string = 'doughnut';
  public barChartLegend:boolean = false;



  public categoryChartLabels:string[] = [];
  public categoryChartData:any[] = [
    {data: [], label:'Value'}
  ];

  public typeChartLabels:string[] = [];
  public typeChartData:any[] = [
    {data: [], label:'Value'}
  ];


}
