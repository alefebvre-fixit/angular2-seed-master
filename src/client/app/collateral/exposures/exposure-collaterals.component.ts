import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { CollateralService } from '../../services/index';
import { Collateral } from '../../models/index';

import { GridConfiguration, GridComponent } from '../../shared/index';
import { FigureComponent, Statistics, Statistic, CollateralStatisticFactory} from '../../shared/index';

@Component({
  moduleId: module.id,
  selector: "exposure-collaterals",
  templateUrl: 'exposure-collaterals.component.html',
  styleUrls: ['exposure-collaterals.component.css'],
  directives: [
    ROUTER_DIRECTIVES, GridComponent, Statistics
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
    });
  }

}
