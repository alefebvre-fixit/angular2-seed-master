import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

import { ExposuresService } from '../../services/index';

@Component({
  moduleId: module.id,
  templateUrl: 'exposures.component.html',
  styleUrls: ['exposures.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
  ],
  viewProviders: [ ExposuresService ],
})
export class ExposuresComponent implements OnInit {

  exposures: Object[];

  constructor(private router: Router, private exposuresService: ExposuresService) {}

  goBack(route: string): void {
    this.router.navigate(['/']);
  }

  userClick(id: string): void {
    alert('clicked on exposure: ' + id);
  }

  ngOnInit(): void {
    this.loadExposures();
  }

  loadExposures(): void {
    this.exposuresService.getAll().subscribe((exposures: Object[]) => {
      this.exposures = exposures;
    });
  }
}
