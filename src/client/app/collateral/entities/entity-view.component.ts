import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {CORE_DIRECTIVES} from '@angular/common';
import {TAB_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';
import { EntitySummaryComponent } from './entity-summary.component';

import { SectionComponent, GridComponent } from '../../shared/index';
import { EntityService, ContractsService } from '../../services/index';

@Component({
  moduleId: module.id,
  templateUrl: 'entity-view.component.html',
  styleUrls: ['entity-view.component.css'],
  directives: [
    ROUTER_DIRECTIVES, TAB_DIRECTIVES, SectionComponent, EntitySummaryComponent, GridComponent
  ],
  viewProviders: [EntityService, ContractsService],
})
export class EntityViewComponent implements OnInit {

  entity: Object = {};
  contracts: Object[];

  constructor(private route: ActivatedRoute, private entityService: EntityService, private contractsService: ContractsService) { }

  ngOnInit() {
    this.route.params
      .map(params => params['id'])
      .subscribe((id) => {
        this.entityService
          .getOneById(id)
          .subscribe(entity => this.entity = entity);
      });
    this.loadContracts();
  }

  ngAfterViewInit(): void {
  }

  loadContracts(): void {
    this.contractsService.getAll().subscribe((contracts: Object[]) => {
      this.contracts = contracts;
    });
  }

  config = {
    "columns": [{ "name": "name", "header": "Name" },
      { "name": "description", "header": "Description" },
      { "name": "counterparty", "header": "Counterparty" },
      { "name": "startDate", "header": "Start Date" }]
  }

}
