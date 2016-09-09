import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import {DROPDOWN_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';

import { SectionComponent, LoadingPage, GridComponent} from '../../shared/index';

import { InventoryService } from '../../services/index';

@Component({
  moduleId: module.id,
  templateUrl: 'inventory.component.html',
  styleUrls: ['inventory.component.css'],
  directives: [
    ROUTER_DIRECTIVES,DROPDOWN_DIRECTIVES,SectionComponent,GridComponent
  ],
  viewProviders: [ InventoryService ],
})
export class InventoryComponent extends LoadingPage implements OnInit {

  positions: Object[];
  constructor(private router: Router, private inventoryService: InventoryService) {
    super(false);
  }

  switch(): void{
    if (this.loading){
      this.ready();
    } else {
      this.standby();
    }
  }

  ngOnInit(): void {
    this.loadPositions();
  }

  loadPositions(): void {
    this.inventoryService.getPositions().subscribe((positions: Object[]) => {
      this.positions = positions;
    });
  }


    config = {
      "columns" : [{ "name": "name", "header": "Name"},
                  { "name": "ISIN", "header": "ISIN"},
                  { "name": "category", "header": "Location"},
                  { "name": "maturity", "header": "Maturity"},
                  { "name": "last", "header": "Last"},
                  { "name": "volume", "header": "Volume"},
                  { "name": "turnover", "header": "Turnover"}]
    }



}
