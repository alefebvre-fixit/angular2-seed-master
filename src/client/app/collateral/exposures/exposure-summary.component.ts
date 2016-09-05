import { Component, OnInit, Input} from '@angular/core';
import { FigureComponent, Statistics, Statistic} from '../../shared/index';
import { MTACard, ThresholdCard, RoundingCard} from './cards/index';

@Component({
  moduleId: module.id,
  selector: "exposure-summary",
  templateUrl: 'exposure-summary.component.html',
  styleUrls: ['exposure-summary.component.css'],
  directives: [
    FigureComponent, MTACard, ThresholdCard, RoundingCard, Statistics
  ],
  viewProviders: [],
})

export class ExposureSummaryComponent implements OnInit {

  @Input() exposure: Object;
  private statistics: Statistic[];

  constructor() {

    this.statistics = [ {"name" : 'Net Balance', "value" : undefined, "currency" : undefined, "history": undefined}, 
                      {"name" : 'Cash Position', "value" : 12, "currency" : undefined, "history": undefined}, 
                      {"name" : 'Security Position', "value" : 12, "currency" : undefined, "history": undefined}, 
                      {"name" : 'Required Margin', "value" : 12, "currency" : undefined, "history": undefined}
                      ];


  }

  ngOnInit(): void {
    this.exposure = {"mta":{}};
  }

}
