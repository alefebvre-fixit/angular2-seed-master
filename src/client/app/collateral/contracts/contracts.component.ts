import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

import { ContractsService } from '../../services/index';

@Component({
  moduleId: module.id,
  templateUrl: 'contracts.component.html',
  styleUrls: ['contracts.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
  ],
  viewProviders: [ ContractsService ],
})
export class ContractsComponent implements OnInit {

  contracts: Object[];

  constructor(private router: Router, private contractsService: ContractsService) {}

  goBack(route: string): void {
    this.router.navigate(['/']);
  }

  userClick(id: string): void {
    alert('clicked on contract: ' + id);
  }

  ngOnInit(): void {
    this.loadContracts();
  }

  loadContracts(): void {
    
  this.contractsService.query().subscribe((contracts: Object[]) => {
    this.contracts = contracts;
  });
    
  }
}
