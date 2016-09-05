import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { SectionComponent, LoadingPage, GridComponent, GridConfiguration} from '../../shared/index';
import { ExposuresService } from '../../services/index';

@Component({
  moduleId: module.id,
  templateUrl: 'exposure-list.component.html',
  styleUrls: ['exposure-list.component.css'],
  directives: [
    ROUTER_DIRECTIVES,SectionComponent,GridComponent
  ],
  viewProviders: [ ExposuresService ],
})
export class ExposuresComponent implements OnInit {

  exposures: Object[];

  private config: GridConfiguration;

  constructor(private router: Router, private exposuresService: ExposuresService) {
  
    this.config = new GridConfiguration(
              [{ "name": "id", "header": "Id"},
              { "name": "name", "header": "Name"},
              { "name": "description", "header": "Description"},
              { "name": "requiredMargin", "header": "Required Margin"},
              { "name": "currency", "header": "Currency"}]);

    this.config.view = true;
    this.config.edit = false;
  }

  ngOnInit(): void {
    this.loadExposures();
  }

  loadExposures(): void {
    this.exposuresService.getAll().subscribe((exposures: Object[]) => {
      this.exposures = exposures;
    });
  }

  view(exposure: any): void{
    this.router.navigate(['/collateral/exposures', exposure.id]);
  }




}
