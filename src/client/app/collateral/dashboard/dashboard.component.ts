import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
  ],
  viewProviders: [],
})

export class DashboardComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

}
