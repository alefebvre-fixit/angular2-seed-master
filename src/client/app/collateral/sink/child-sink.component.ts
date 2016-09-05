import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { GridComponent, GridConfiguration, Statistics, Statistic} from '../../shared/index';

@Component({
  moduleId: module.id,
  selector: 'child-sink',
  templateUrl: 'child-sink.component.html',
  directives: [
    ROUTER_DIRECTIVES,GridComponent,Statistics
  ],
  viewProviders: [],
})

export class ChildSinkComponent implements OnInit {

  private statistics: Statistic[];
  private increment: number = 0;

  constructor(private router: Router) {

    this.statistics = [ {"name" : 'Total Exposure', "value" : -260000, "currency" : 'usd', "history": undefined}, 
                      {"name" : 'Increment', "value" : this.increment, "currency" : undefined, "history": undefined}, 
                      {"name" : 'Contracts', "value" : 22, "currency" : undefined, "history": undefined}, 
                      {"name" : 'Contacts', "value" : 10, "currency" : undefined, "history": undefined}
                      ];


  }

  ngOnInit(): void {
  }

  alert() :void{
    console.log("##### This is a call from the child conponent #####");
  }

  addStatistic(){
    this.statistics.push({"name" : 'Contacts', "value" : this.increment, "currency" : 'eur', "history": undefined});
  }

  resetStatistic(){
    this.statistics = [ {"name" : 'Total Exposure', "value" : -260000, "currency" : 'usd', "history": undefined}, 
                      {"name" : 'Increment', "value" : this.increment, "currency" : undefined, "history": undefined}, 
                      {"name" : 'Contracts', "value" : 22, "currency" : undefined, "history": undefined}, 
                      {"name" : 'Contacts', "value" : 10, "currency" : undefined, "history": undefined}
                      ];  }
  
  modifyStatistic(){
    this.statistics[0].value++;
    this.increment++;
  }

}

  
