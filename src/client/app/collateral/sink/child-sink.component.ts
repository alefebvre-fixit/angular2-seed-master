import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { GridComponent, GridConfiguration, Statistics, Statistic} from '../../shared/index';
import { Observable } from 'rxjs';
import { TYPEAHEAD_DIRECTIVES } from 'ng2-bootstrap/components/typeahead';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'child-sink',
  templateUrl: 'child-sink.component.html',
  directives: [
    ROUTER_DIRECTIVES,GridComponent,Statistics, TYPEAHEAD_DIRECTIVES
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


    this.dataSource = Observable.create((observer:any) => {
      // Runs on every search
      observer.next(this.asyncSelected);
    }).mergeMap((token:string) => this.getStatesAsObservable(token));

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



  public stateCtrl:FormControl = new FormControl();
 
  public myForm:FormGroup = new FormGroup({
    state: this.stateCtrl
  });

  public customSelected:string = '';
  public selected:string = '';
  public dataSource:Observable<any>;
  public asyncSelected:string = '';

  public typeaheadLoading:boolean = false;
  public typeaheadNoResults:boolean = false;

  public statesComplex:Array<any> = [
    {id: 1, name: 'Alabama'}, {id: 2, name: 'Alaska'}, {id: 3, name: 'Arizona'},
    {id: 4, name: 'Arkansas'}, {id: 5, name: 'California'},
    {id: 6, name: 'Colorado'}, {id: 7, name: 'Connecticut'},
    {id: 8, name: 'Delaware'}, {id: 9, name: 'Florida'},
    {id: 10, name: 'Georgia'}, {id: 11, name: 'Hawaii'},
    {id: 12, name: 'Idaho'}, {id: 13, name: 'Illinois'},
    {id: 14, name: 'Indiana'}, {id: 15, name: 'Iowa'},
    {id: 16, name: 'Kansas'}, {id: 17, name: 'Kentucky'},
    {id: 18, name: 'Louisiana'}, {id: 19, name: 'Maine'},
    {id: 21, name: 'Maryland'}, {id: 22, name: 'Massachusetts'},
    {id: 23, name: 'Michigan'}, {id: 24, name: 'Minnesota'},
    {id: 25, name: 'Mississippi'}, {id: 26, name: 'Missouri'},
    {id: 27, name: 'Montana'}, {id: 28, name: 'Nebraska'},
    {id: 29, name: 'Nevada'}, {id: 30, name: 'New Hampshire'},
    {id: 31, name: 'New Jersey'}, {id: 32, name: 'New Mexico'},
    {id: 33, name: 'New York'}, {id: 34, name: 'North Dakota'},
    {id: 35, name: 'North Carolina'}, {id: 36, name: 'Ohio'},
    {id: 37, name: 'Oklahoma'}, {id: 38, name: 'Oregon'},
    {id: 39, name: 'Pennsylvania'}, {id: 40, name: 'Rhode Island'},
    {id: 41, name: 'South Carolina'}, {id: 42, name: 'South Dakota'},
    {id: 43, name: 'Tennessee'}, {id: 44, name: 'Texas'},
    {id: 45, name: 'Utah'}, {id: 46, name: 'Vermont'},
    {id: 47, name: 'Virginia'}, {id: 48, name: 'Washington'},
    {id: 49, name: 'West Virginia'}, {id: 50, name: 'Wisconsin'},
    {id: 51, name: 'Wyoming'}];


public getStatesAsObservable(token:string):Observable<any> {
    let query = new RegExp(token, 'ig');
 
    return Observable.of(
      this.statesComplex.filter((state:any) => {
        return query.test(state.name);
      })
    );
  }
 
  public changeTypeaheadLoading(e:boolean):void {
    this.typeaheadLoading = e;
  }
 
  public changeTypeaheadNoResults(e:boolean):void {
    this.typeaheadNoResults = e;
  }
 
  public typeaheadOnSelect(e:any):void {
    console.log('Selected value: ', e.item);
  }


}

  
