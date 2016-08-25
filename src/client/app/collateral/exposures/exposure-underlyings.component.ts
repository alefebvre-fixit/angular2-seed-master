import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { ExposuresService } from '../../services/index';
import { ActivatedRoute } from '@angular/router';
import { SectionComponent, LoadingPage, GridComponent} from '../../shared/index';

@Component({
  moduleId: module.id,
  selector: "exposure-underlyings",
  templateUrl: 'exposure-underlyings.component.html',
  styleUrls: ['exposure-underlyings.component.css'],
  directives: [
    ROUTER_DIRECTIVES, GridComponent
  ],
  viewProviders: [ ExposuresService ],
})

export class ExposureUnderlyingsComponent implements OnInit {

  underlyings: Object[];

  constructor(private route: ActivatedRoute, private exposuresService: ExposuresService) {}

  ngOnInit(): void {
    this.loadUnderlyings();
  }

  loadUnderlyings(): void {
    this.route.params
      .map(params => params['id'])
      .subscribe((id) => {
        this.exposuresService.getUnderlyingsByExposureId(id).subscribe((underlyings: Object[]) => {
          this.underlyings = underlyings;
        });
      });
  }

    columns = [{ "id": "name", "header": "Id"},
              { "code": "ISIN", "header": "Code"},
              { "name": "location", "header": "Name"},
              { "description": "maturity", "header": "Description"},
              { "exposureId": "last", "header": "Exposure Id"}];

}
