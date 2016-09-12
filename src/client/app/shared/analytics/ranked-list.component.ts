import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Statistic } from '../grid/statistic';
import { FigureComponent } from '../grid/figure.component';

@Component({
  moduleId: module.id,
  selector: "ranked-list",
  templateUrl: 'ranked-list.component.html',
  styleUrls: ['ranked-list.component.css'],
  directives: [
    FigureComponent
  ],
  viewProviders: [],
})
export class RankedList implements OnInit {

  @Input() config: {};
  @Input() datas: Array<Statistic>;

  @Output() view = new EventEmitter();
  @Output() more = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
  }



}
