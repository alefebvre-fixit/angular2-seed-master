import { Component, OnInit, Input} from '@angular/core';
import { FigureComponent } from './figure.component';
import { Statistic } from './statistic';

@Component({
  moduleId: module.id,
  selector: "statistics",
  templateUrl: 'statistics.component.html',
  styleUrls: ['statistics.component.css'],
  directives: [
    FigureComponent
  ],
  viewProviders: [],
})
export class Statistics implements OnInit {

  @Input() datas: Array<Statistic>;

  constructor() {}

  ngOnInit(): void {
  }

}
