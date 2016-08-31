import { Component, OnInit, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { EntityService } from '../../services/index';
import {Contact} from './contact';
import {MODAL_DIRECTIVES, BS_VIEW_PROVIDERS} from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  moduleId: module.id,
  selector: "contact-edit",
  templateUrl: 'contact-edit.component.html',
  styleUrls: ['contact-edit-component.css'],
  directives: [
    ROUTER_DIRECTIVES,MODAL_DIRECTIVES
  ],
  viewProviders: [ BS_VIEW_PROVIDERS ],
})

export class ContactEditComponent implements OnInit {

  @ViewChild('modal') modal:any;

  @Output() onSubmit = new EventEmitter<boolean>();
  @Output() onCancel = new EventEmitter<boolean>();


  roles = ['Role-A', 'Role-B',
            'Role-C', 'Role-D'];

  model = new Contact(0, 'John', 'Doe', 'johndoe@gmail.com', '+1 111 2222 3333', this.roles[2]);

  constructor(private entityService: EntityService) {
  }

  ngOnInit(): void {
      this.model = new Contact(0, 'John', 'Doe', 'johndoe@gmail.com', '+1 111 2222 3333', this.roles[2]);
  }

  submit(): void {
    console.log("submit");
    this.entityService.create(this.model);
    this.onSubmit.emit(true);
  }

  cancel(){
    console.log("cancel");
  }

  public create(){
    this.modal.show();
  }

  public view(contact: Contact){
    this.model = contact;
    this.modal.show();
  }

  public edit(contact: Contact){
    this.model = contact;
    this.modal.show();
  }


}
