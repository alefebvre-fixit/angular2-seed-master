import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {AlertComponent} from 'ng2-bootstrap/ng2-bootstrap';

import { Config, ToolbarComponent } from '../shared/index';
import {ACCORDION_DIRECTIVES, DROPDOWN_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';

/**
 * This class represents the main application component. Within the @Routes annotation is the configuration of the
 * applications routes, configuring the paths for the lazy loaded components (HomeComponent, AboutComponent).
 */
@Component({
  moduleId: module.id,
  viewProviders: [],
  templateUrl: 'collateral.component.html',
  styleUrls: ['collateral.component.css'],
  directives: [ROUTER_DIRECTIVES, ACCORDION_DIRECTIVES, ToolbarComponent]
})
export class CollateralComponent {
  constructor() {
    console.log('Environment config', Config);
  }
}
