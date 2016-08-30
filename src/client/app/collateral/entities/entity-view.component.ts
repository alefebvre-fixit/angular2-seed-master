import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {CORE_DIRECTIVES} from '@angular/common';
import {TAB_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';
import { EntitySummaryComponent } from './entity-summary.component';

import { SectionComponent } from '../../shared/index';
import { EntityService } from '../../services/index';
import { ChildSinkComponent } from '../../sink/child-sink.component';

@Component({
  moduleId: module.id,
  templateUrl: 'entity-view.component.html',
  styleUrls: ['entity-view.component.css'],
  directives: [
    ROUTER_DIRECTIVES,TAB_DIRECTIVES,SectionComponent,EntitySummaryComponent,ChildSinkComponent
  ],
  viewProviders: [ EntityService ],
})
export class EntityViewComponent implements OnInit {

  entity: Object = {};

  constructor(private route: ActivatedRoute, private entityService: EntityService) {}

  ngOnInit() {
    this.route.params
      .map(params => params['id'])
      .subscribe((id) => {
        this.entityService
          .getOneById(id)
          .subscribe(entity => this.entity = entity);
      });
  }

  @ViewChild('child') child:ChildSinkComponent;


  ngAfterViewInit() : void{
    console.log("After Init");
    console.log(this.child);
  }

}
