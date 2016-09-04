import { Component, OnInit, Input} from '@angular/core';
import { FigureComponent} from '../../../shared/index';

@Component({
  moduleId: module.id,
  selector: "rounding-card",
  templateUrl: 'rounding-card.component.html',
  styleUrls: ['rounding-card.component.css'],
  directives: [
    FigureComponent
  ],
  viewProviders: [],
})

export class RoundingCard implements OnInit {

  @Input() rounding: any;

  constructor() {}

  ngOnInit(): void {
    this.rounding = {};
  }

}
