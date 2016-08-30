import { Component, OnInit, Input} from '@angular/core';
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

  constructor(private router: Router) {}

  goBack(route: string): void {
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
  }

}



export class GridConfiguration{
    
  constructor(public columns:ColumnConfiguration[]){}

  viewCallBack: Function;
  editCallBack: Function;
  //TODO remove link
  link: Function;

}

export class ColumnConfiguration{
  constructor(public name:string, public header:string){}
}
