import { Component, OnInit, Input, ViewChild} from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import {DROPDOWN_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';

import { EntityService } from '../../services/index';
import { Contact } from '../../models/index';

import { GridComponent, GridConfiguration, Statistics, Statistic} from '../../shared/index';
import { ContactEditComponent} from './contact-edit.component';

import * as _ from 'lodash'

@Component({
  moduleId: module.id,
  selector: "entity-summary",
  templateUrl: 'entity-summary.component.html',
  styleUrls: ['entity-summary-component.css'],
  directives: [
    ROUTER_DIRECTIVES,DROPDOWN_DIRECTIVES,GridComponent,ContactEditComponent,Statistics
  ],
  viewProviders: [EntityService],
})
export class EntitySummaryComponent implements OnInit {

  @ViewChild('editor') editor:ContactEditComponent;
  @Input() entity: Object = {};
  
  private contacts: Object[];
  private config: GridConfiguration;
  private statistics: Statistic[];

  //cloned entity for edition
  private model: Object = {};

  constructor(private entityService: EntityService) {

    this.config = new GridConfiguration(
              [{ "name": "firstName", "header": "First Name"},
              { "name": "lastName", "header": "Last Name"},
              { "name": "email", "header": "Email"},
              { "name": "phone", "header": "Phone"}
              ]);

    this.config.view = true;
    this.config.edit = true;

    this.statistics = [ {"name" : 'Total Exposure', "value" : -260000, "currency" : 'usd', "history": undefined}, 
                      {"name" : 'Trades', "value" : 243, "currency" : undefined, "history": undefined}, 
                      {"name" : 'Contracts', "value" : 22, "currency" : undefined, "history": undefined}, 
                      {"name" : 'Contacts', "value" : 10, "currency" : undefined, "history": undefined}
                      ];
  }

  ngOnInit(): void {
    this.loadContacts();
  }

  loadContacts(): void {
    this.entityService.contact$.subscribe((contacts: Object[]) => {
      this.contacts = contacts;
    });
  }

  view(contact: Contact): void {
    this.editor.view(contact);
  }

  edit(contact: Contact): void {
    this.editor.edit(contact);
  }

  mode:string = 'view';

  editEntity(entity:any): void {
    this.mode = 'edit';
    this.model = _.cloneDeep(entity);
  }

  viewEntity(entity:any): void {
    this.mode = 'view';
  }

  cancel(): void {
    this.mode = 'view';
  }

}







