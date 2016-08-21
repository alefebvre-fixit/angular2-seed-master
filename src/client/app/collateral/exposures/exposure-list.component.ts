import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { SectionComponent } from '../../shared/index';
import { ExposuresService } from '../../services/index';

@Component({
  moduleId: module.id,
  templateUrl: 'exposure-list.component.html',
  styleUrls: ['exposure-list.component.css'],
  directives: [
    ROUTER_DIRECTIVES,SectionComponent,
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
