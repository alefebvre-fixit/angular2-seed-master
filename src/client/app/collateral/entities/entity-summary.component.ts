import { Component, OnInit, Input, ViewChild} from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { EntityService } from '../../services/index';
import { GridComponent, GridConfiguration} from '../../shared/index';
import { ContactEditComponent} from './contact-edit.component';
import { ChildSinkComponent } from '../../sink/child-sink.component';

import {MODAL_DIRECTIVES, BS_VIEW_PROVIDERS} from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  moduleId: module.id,
  selector: "entity-summary",
  templateUrl: 'entity-summary.component.html',
  styleUrls: ['entity-summary-component.css'],
  directives: [
    ROUTER_DIRECTIVES, MODAL_DIRECTIVES, GridComponent, ContactEditComponent,ChildSinkComponent
  ],
  viewProviders: [BS_VIEW_PROVIDERS, EntityService],
})
export class EntitySummaryComponent implements OnInit {

  @ViewChild('lgModal') lgModal:any;

  @Input() entity: Object = {};
  contacts: Object[];


  constructor(private entityService: EntityService) {

    this.config = new GridConfiguration(
              [{ "name": "firstName", "header": "First Name"},
              { "name": "lastName", "header": "Last Name"},
              { "name": "email", "header": "Email"},
              { "name": "phone", "header": "Phone"}
              ]);

    this.config.viewCallBack = this.view;
    this.config.link = () => { // <-- note syntax here
        this.view();
    }

  }

  config: GridConfiguration;

  ngOnInit(): void {
    this.loadContacts();
  }

  loadContacts(): void {
    this.entityService.contact$.subscribe((contacts: Object[]) => {
      console.log("Event Received!!!!");
      this.contacts = contacts;
    });
  }

  view(): void {
    console.log(this.lgModal.show());
    console.log(this);
  }


  @ViewChild('child') child:ChildSinkComponent;


  ngAfterViewInit() : void{
    console.log("After Init");
    console.log(this.child);
    console.log(this);

  }

}







