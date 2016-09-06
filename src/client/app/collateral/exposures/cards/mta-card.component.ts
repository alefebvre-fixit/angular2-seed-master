import { Component, OnInit, Input} from '@angular/core';
import { FigureComponent} from '../../../shared/index';
import { MTA} from '../../../models/index';

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

  @Input() mta: MTA;

  constructor() {}

  ngOnInit(): void {
    this.mta = new MTA();
  }

}
