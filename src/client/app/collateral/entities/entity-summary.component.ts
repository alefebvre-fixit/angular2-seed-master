import { Component, OnInit, Input} from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { EntityService } from '../../services/index';
import { GridComponent} from '../../shared/index';

@Component({
  moduleId: module.id,
  selector: "entity-summary",
  templateUrl: 'entity-summary.component.html',
  styleUrls: ['entity-summary-component.css'],
  directives: [
    ROUTER_DIRECTIVES, GridComponent
  ],
  viewProviders: [EntityService],
})

export class EntitySummaryComponent implements OnInit {

  @Input() entity: Object = {};
  contacts: Object[];

  constructor(private entityService: EntityService) {}

  ngOnInit(): void {
    this.loadContacts();
  }

  loadContacts(): void {
    this.entityService.getContacts().subscribe((contacts: Object[]) => {
      this.contacts = contacts;
    });
  }

  add(): void {
    
  }


  config = {
  "columns": [{ "name": "firstName", "header": "First Name"},
              { "name": "lastName", "header": "Last Name"},
              { "name": "email", "header": "Email"},
              { "name": "phone", "header": "Phone"}
              ],
  "link": "contact"              
  }

}
