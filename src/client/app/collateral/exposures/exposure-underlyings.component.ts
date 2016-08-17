import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: "exposure-underlyings",
  templateUrl: 'exposure-underlyings.component.html',
  styleUrls: ['exposure-underlyings.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
  ],
  viewProviders: [],
})

export class ExposureUnderlyingsComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

}
