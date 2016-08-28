import { Component, OnInit, Input} from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import {Contact} from './contact';

@Component({
  moduleId: module.id,
  selector: "contact-edit",
  templateUrl: 'contact-edit.component.html',
  styleUrls: ['contact-edit-component.css'],
  directives: [
    ROUTER_DIRECTIVES,
  ],
  viewProviders: [],
})

export class ContactEditComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }

  add(): void {    
  }

  onSubmit(): void {
    console.log("onSubmit");
  }


  roles = ['Role-A', 'Role-B',
            'Role-C', 'Role-D'];

  model = new Contact(0, 'John', 'Doe', 'johndoe@gmail.com', '+1 111 2222 3333', this.roles[2]);



}
