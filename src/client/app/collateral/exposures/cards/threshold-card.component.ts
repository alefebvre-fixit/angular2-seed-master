import { Component, OnInit, Input} from '@angular/core';
import { FigureComponent} from '../../../shared/index';

@Component({
  moduleId: module.id,
  selector: "threshold-card",
  templateUrl: 'threshold-card.component.html',
  styleUrls: ['threshold-card.component.css'],
  directives: [
    FigureComponent
  ],
  viewProviders: [],
})

export class ThresholdCard implements OnInit {

  @Input() threshold: any;

  constructor() {}

  ngOnInit(): void {
    this.threshold = {};
  }

}
