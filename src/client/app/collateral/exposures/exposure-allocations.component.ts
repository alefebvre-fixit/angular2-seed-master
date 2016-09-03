import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: "exposure-allocations",
  templateUrl: 'exposure-allocations.component.html',
  styleUrls: ['exposure-allocations.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
  ],
  viewProviders: [],
})

export class ExposureAllocationsComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

}
