import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'child-sink',
  templateUrl: 'child-sink.component.html',
  directives: [
    ROUTER_DIRECTIVES
  ],
  viewProviders: [],
})

export class ChildSinkComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  alert() :void{
    console.log("##### This is a call from the child conponent #####");
  }

}
