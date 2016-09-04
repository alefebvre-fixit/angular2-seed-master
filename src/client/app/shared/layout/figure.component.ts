import { Component, OnInit, Input} from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: "figure",
  templateUrl: 'figure.component.html',
  styleUrls: ['figure.component.css'],
  directives: [
  ],
  viewProviders: [],
})
export class FigureComponent implements OnInit {

  @Input() value: number = 0;
  @Input() currency: string;

  constructor() {}

  ngOnInit(): void {
  }

}
