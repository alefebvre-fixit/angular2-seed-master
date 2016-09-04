import { Component, OnInit, Input} from '@angular/core';
import { FigureComponent} from '../../../shared/index';

@Component({
  moduleId: module.id,
  selector: "mta-card",
  templateUrl: 'mta-card.component.html',
  styleUrls: ['mta-card.component.css'],
  directives: [
    FigureComponent
  ],
  viewProviders: [],
})

export class MTACard implements OnInit {

  @Input() mta: any;

  constructor() {}

  ngOnInit(): void {
  }

}
