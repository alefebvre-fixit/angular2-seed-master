import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {CORE_DIRECTIVES} from '@angular/common';
import {TAB_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';

import { SectionComponent } from '../../shared/index';
import { ExposuresService } from '../../services/index';
import { ExposureSummaryComponent } from './exposure-summary.component';
import { ExposureUnderlyingsComponent } from './exposure-underlyings.component';
import { ExposureCollateralsComponent } from './exposure-collaterals.component';
import { ExposureAllocationsComponent } from './exposure-allocations.component';


@Component({
  moduleId: module.id,
  templateUrl: 'exposure-view.component.html',
  styleUrls: ['exposure-view.component.css'],
  directives: [
    ROUTER_DIRECTIVES,TAB_DIRECTIVES,SectionComponent,ExposureSummaryComponent,ExposureUnderlyingsComponent,ExposureCollateralsComponent,ExposureAllocationsComponent
  ],
  viewProviders: [ ExposuresService ],
})
export class ExposureDetailsComponent implements OnInit {

  exposure: Object;

  constructor(private route: ActivatedRoute, private exposuresService: ExposuresService) {}

  userClick(id: string): void {
    alert('clicked on exposure: ' + id);
  }

  ngOnInit() {
    this.route.params
      .map(params => params['id'])
      .subscribe((id) => {
        this.exposuresService
          .getOneById(id)
          .subscribe(exposure => this.exposure = exposure);
      });
  }
}
