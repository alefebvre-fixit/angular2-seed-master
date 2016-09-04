import { Component, OnInit, Input} from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { FigureComponent} from '../../shared/index';
import { MTACard, ThresholdCard, RoundingCard} from './cards/index';

@Component({
  moduleId: module.id,
  selector: "exposure-summary",
  templateUrl: 'exposure-summary.component.html',
  styleUrls: ['exposure-summary.component.css'],
  directives: [
    ROUTER_DIRECTIVES, FigureComponent, MTACard, ThresholdCard, RoundingCard
  ],
  viewProviders: [],
})

export class ExposureSummaryComponent implements OnInit {

  @Input() exposure: Object;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.exposure = {"mta":{}};
  }

}
