import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: "exposure-collaterals",
  templateUrl: 'exposure-collaterals.component.html',
  styleUrls: ['exposure-collaterals.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
  ],
  viewProviders: [],
})

export class ExposureCollateralsComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

}
