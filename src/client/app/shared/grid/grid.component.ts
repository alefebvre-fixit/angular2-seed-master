import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import {DROPDOWN_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';
import { LoadingContainer, LoadingPage } from '../index';

@Component({
  moduleId: module.id,
  selector: "grid",
  templateUrl: 'grid.component.html',
  styleUrls: ['grid.component.css'],
  directives: [
    ROUTER_DIRECTIVES,DROPDOWN_DIRECTIVES,LoadingContainer
  ],
  viewProviders: [],
})
export class GridComponent implements OnInit {

  @Input() loading: boolean;
  @Input() config: {"column": Object[], "link": string};
  @Input() datas: Object[];
  @Output() view = new EventEmitter();
  @Output() edit = new EventEmitter();

  constructor(private router: Router) {}

  goBack(route: string): void {
    this.router.navigate(['/']);
  }

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
