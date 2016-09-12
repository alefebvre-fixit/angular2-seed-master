import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {DROPDOWN_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';
import { LoadingContainer, LoadingPage } from '../index';

@Component({
  moduleId: module.id,
  selector: "grid",
  templateUrl: 'grid.component.html',
  styleUrls: ['grid.component.css'],
  directives: [
    DROPDOWN_DIRECTIVES,LoadingContainer
  ],
  viewProviders: [],
})
export class GridComponent implements OnInit {

  @Input() loading: boolean;
  @Input() config: {"column": Object[], "link": string};
  @Input() datas: Object[];
  @Output() view = new EventEmitter();
  @Output() edit = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
  }

  selectedRowId:any;

  selectItem(item: any){
    if (item.selected){
      item.selected = false;
    } else {
      item.selected = true;
    }
  }


}
