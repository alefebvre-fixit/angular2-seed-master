import { Component, OnInit, Input} from '@angular/core';
import {RemoveUndefined} from "../pipes/index"

@Component({
  moduleId: module.id,
  pipes: [RemoveUndefined],
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
