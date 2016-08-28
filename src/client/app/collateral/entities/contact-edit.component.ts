import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { EntityService } from '../../services/index';
import {Contact} from './contact';

@Component({
  moduleId: module.id,
  selector: "contact-edit",
  templateUrl: 'contact-edit.component.html',
  styleUrls: ['contact-edit-component.css'],
  directives: [
    ROUTER_DIRECTIVES,
  ],
  viewProviders: [ ],
})

export class ContactEditComponent implements OnInit {

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





}
