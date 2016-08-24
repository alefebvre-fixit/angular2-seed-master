import { Component, OnInit, Input} from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import {DROPDOWN_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  moduleId: module.id,
  selector: "grid",
  templateUrl: 'grid.component.html',
  styleUrls: ['grid.component.css'],
  directives: [
    ROUTER_DIRECTIVES,DROPDOWN_DIRECTIVES
  ],
  viewProviders: [],
})
export class GridComponent implements OnInit {

  @Input() loading: boolean;
  @Input() columns: Object[];
  @Input() datas: Object[];

  constructor(private router: Router) {}

  goBack(route: string): void {
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
  }

}
