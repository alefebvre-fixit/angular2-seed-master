import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { SectionComponent } from '../../shared/index';
import { ChildSinkComponent } from './child-sink.component';

@Component({
  moduleId: module.id,
  templateUrl: 'sink.component.html',
  styleUrls: ['sink.component.css'],
  directives: [
    ROUTER_DIRECTIVES,SectionComponent,ChildSinkComponent
  ],
  viewProviders: [],
})

export class SinkComponent implements OnInit {

  @ViewChild('child') child:ChildSinkComponent;

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  ngAfterViewInit() : void{
    console.log("After Init");
    console.log(this.child);
  }


}
