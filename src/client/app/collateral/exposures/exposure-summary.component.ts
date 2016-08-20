import { Component, OnInit, Input} from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: "exposure-summary",
  templateUrl: 'exposure-summary.component.html',
  styleUrls: ['exposure-summary.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
  ],
  viewProviders: [],
})

export class ExposureSummaryComponent implements OnInit {

  @Input() exposure: Object;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.exposure = {"mta":{}};
  }

}
