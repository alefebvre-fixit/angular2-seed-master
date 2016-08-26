import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import {DROPDOWN_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';
import { SectionComponent, GridComponent} from '../../shared/index';
import { EntityService } from '../../services/index';


@Component({
  moduleId: module.id,
  templateUrl: 'entity-list.component.html',
  styleUrls: ['entity-list.component.css'],
  directives: [
    ROUTER_DIRECTIVES,DROPDOWN_DIRECTIVES,SectionComponent, GridComponent
  ],
  viewProviders: [ EntityService ],
})
export class EntityListComponent  implements OnInit {

  entities: Object[];

  constructor(private router: Router, private entityService: EntityService) {
  }

  ngOnInit(): void {
    this.loadEntities();
  }

  loadEntities(): void {
    this.entityService.getAll().subscribe((entities: Object[]) => {
      this.entities = entities;
    });
  }


  
  config = {
  "columns": [{ "name": "id", "header": "Id"},
              { "name": "name", "header": "Name"},
              { "name": "country", "header": "Country"},
              { "name": "city", "header": "City"}],
  "link": "entities"              
  }



}
