import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { SectionComponent } from '../../shared/index';

import { ContractsService } from '../../services/index';

@Component({
  moduleId: module.id,
  templateUrl: 'contracts.component.html',
  styleUrls: ['contracts.component.css'],
  directives: [
    ROUTER_DIRECTIVES,SectionComponent,
  ],
  viewProviders: [ ContractsService ],
})
export class ContractsComponent implements OnInit {

  contracts: Object[];

  constructor(private router: Router, private contractsService: ContractsService) {}

  ngOnInit(): void {
    this.loadContracts();
  }

  loadContracts(): void {
    this.contractsService.query().subscribe((contracts: Object[]) => {
      this.contracts = contracts;
    });
  }





}
