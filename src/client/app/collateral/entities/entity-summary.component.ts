import { Component, OnInit, Input, ViewChild} from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { EntityService } from '../../services/index';
import { GridComponent, GridConfiguration} from '../../shared/index';
import { ContactEditComponent} from './contact-edit.component';
import {Contact} from './contact';
import {DROPDOWN_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';
import * as _ from 'lodash'

@Component({
  moduleId: module.id,
  selector: "entity-summary",
  templateUrl: 'entity-summary.component.html',
  styleUrls: ['entity-summary-component.css'],
  directives: [
    ROUTER_DIRECTIVES,DROPDOWN_DIRECTIVES,GridComponent,ContactEditComponent
  ],
  viewProviders: [EntityService],
})
export class EntitySummaryComponent implements OnInit {

  @ViewChild('editor') editor:ContactEditComponent;
  @Input() entity: Object = {};
  
  private contacts: Object[];
  private config: GridConfiguration;
  
  //cloned entity for edition
  private model: Object = {};

  constructor(private entityService: EntityService) {

    this.config = new GridConfiguration(
              [{ "name": "firstName", "header": "First Name"},
              { "name": "lastName", "header": "Last Name"},
              { "name": "email", "header": "Email"},
              { "name": "phone", "header": "Phone"}
              ]);

    this.config.viewCallBack = (contact: any) => { 
        this.view(contact);
    }

    this.config.editCallBack = (contact: any) => { // <-- note syntax here
        this.edit(contact);
    }

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







