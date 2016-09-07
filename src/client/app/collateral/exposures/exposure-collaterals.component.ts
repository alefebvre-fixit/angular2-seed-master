import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { CollateralService } from '../../services/index';
import { GridConfiguration, GridComponent } from '../../shared/index';

@Component({
  moduleId: module.id,
  selector: "exposure-collaterals",
  templateUrl: 'exposure-collaterals.component.html',
  styleUrls: ['exposure-collaterals.component.css'],
  directives: [
    ROUTER_DIRECTIVES, GridComponent
  ],
  viewProviders: [ CollateralService ],
})

export class ExposureCollateralsComponent implements OnInit {

  private collaterals: Object[];
  private config: GridConfiguration;

  constructor(private router: Router, private collateralService: CollateralService) {

    this.config = new GridConfiguration(
              [{ "name": "name", "header": "Name"},
              { "name": "code", "header": "Code"},
              { "name": "type", "header": "Type"},
              { "name": "category", "header": "Category"},
              { "name": "value", "header": "Value"}
              ]);

    this.config.view = false;
    this.config.edit = false;

  }

  ngOnInit(): void {
    this.loadCollaterals();
  }

  loadCollaterals(): void {
    this.collateralService.collaterals$.subscribe((collaterals: Object[]) => {
      this.collaterals = collaterals;
    });
  }

}
