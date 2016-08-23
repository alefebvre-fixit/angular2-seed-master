import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

import { SectionComponent, LoadingContainer, LoadingPage } from '../../shared/index';

import { InventoryService } from '../../services/index';

@Component({
  moduleId: module.id,
  templateUrl: 'inventory.component.html',
  styleUrls: ['inventory.component.css'],
  directives: [
    ROUTER_DIRECTIVES,SectionComponent,LoadingContainer
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
    this.loadContracts();
  }

  loadContracts(): void {
    this.inventoryService.getPositions().subscribe((positions: Object[]) => {
      this.positions = positions;
    });
  }





}
