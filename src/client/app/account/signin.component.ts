import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  templateUrl: 'signin.component.html',
  styleUrls: ['signin.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
  ],
  viewProviders: [],
})

export class SignInComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

}
