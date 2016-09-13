import { Component, OnInit, OnChanges, Input, SimpleChanges} from '@angular/core';
import { FigureComponent, Statistics, Statistic, StatisticFactory} from '../../shared/index';
import { MTACard, ThresholdCard, RoundingCard, DisputeCard} from './cards/index';
import { Exposure} from '../../models/index';

@Component({
  moduleId: module.id,
  selector: "exposure-summary",
  templateUrl: 'exposure-summary.component.html',
  styleUrls: ['exposure-summary.component.css'],
  directives: [
    MTACard, ThresholdCard, RoundingCard, DisputeCard,  Statistics
  ],
  viewProviders: [],
})

export class ExposureSummaryComponent implements OnInit {

  @Input() exposure: Exposure;
  
  private statistics: Statistic[];

  constructor() {}

  ngOnChanges(changes: SimpleChanges){
    if (this.exposure != undefined){
        this.statistics = StatisticFactory.create(this.exposure);
    }
  }

  ngOnInit(): void {
    this.exposure  = new Exposure();
  }

}
