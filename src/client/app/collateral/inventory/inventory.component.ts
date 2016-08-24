import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import {DROPDOWN_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';

import { SectionComponent, LoadingContainer, LoadingPage, GridComponent} from '../../shared/index';

import { InventoryService } from '../../services/index';

@Component({
  moduleId: module.id,
  templateUrl: 'inventory.component.html',
  styleUrls: ['inventory.component.css'],
  directives: [
    ROUTER_DIRECTIVES,DROPDOWN_DIRECTIVES,SectionComponent,LoadingContainer,GridComponent
  ],
  viewProviders: [ InventoryService ],
})
export class InventoryComponent extends LoadingPage implements OnInit {

  positions: Object[];
  loading2: boolean;

  constructor(private router: Router, private inventoryService: InventoryService) {
    super(false);
  }

  switch(): void{
    if (this.loading){
      this.loading2 =false;
      this.ready();
    } else {
      this.loading2 =true;
      this.standby();
    }
  }

  ngOnInit(): void {
    this.loadContracts();
  }

  loadContracts(): void {
    this.inventoryService.getPositions().subscribe((positions: Object[]) => {
      this.positions = positions;
    });
  }

  columns = [{ "name": "name", "header": "Name"},
              { "name": "ISIN", "header": "ISIN"},
              { "name": "location", "header": "Location"},
              { "name": "maturity", "header": "Maturity"},
              { "name": "last", "header": "Last"},
              { "name": "volume", "header": "Volume"},
              { "name": "turnover", "header": "Turnover"}];

}
