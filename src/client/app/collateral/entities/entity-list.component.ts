import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import {DROPDOWN_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';



@Component({
  moduleId: module.id,
  templateUrl: 'entity-list.component.html',
  styleUrls: ['entity-list.component.css'],
  directives: [
    ROUTER_DIRECTIVES,DROPDOWN_DIRECTIVES
  ],
  viewProviders: [],
})
export class EntityListComponent  implements OnInit {

  entities: Object[];

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.loadEntities();
  }

  loadEntities(): void {
  }

  columns = [{ "name": "id", "header": "Id"},
              { "name": "name", "header": "Name"},
              { "name": "country", "header": "Country"},
              { "name": "city", "header": "City"}];


}
