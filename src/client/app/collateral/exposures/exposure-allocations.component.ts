import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

import { SectionComponent, GridConfiguration, GridComponent, Statistic, Statistics, AllocationStatisticFactory } from '../../shared/index';
import { InventoryService, CollateralService } from '../../services/index';
import { Collateral, Exposure, Allocation } from '../../models/index';
import { PROGRESSBAR_DIRECTIVES, TYPEAHEAD_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';

import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  moduleId: module.id,
  selector: "exposure-allocations",
  templateUrl: 'exposure-allocations.component.html',
  styleUrls: ['exposure-allocations.component.css'],
  directives: [
    ROUTER_DIRECTIVES, SectionComponent, TYPEAHEAD_DIRECTIVES, PROGRESSBAR_DIRECTIVES, GridComponent, Statistics
  ],
  viewProviders: [ CollateralService ],
})

export class ExposureAllocationsComponent implements OnInit {

  @Input() exposure: Exposure;

  private config: GridConfiguration;
  private statistics: Statistic[];


  positions: Collateral[];
  collateral: Collateral;
  allocations: Collateral[];
  allocation: Allocation;

  constructor(private router: Router, private collateralService: CollateralService) {

    this.config = new GridConfiguration(
      [{ "name": "name", "header": "Name" },
        { "name": "code", "header": "Code" },
        { "name": "type", "header": "Type" },
        { "name": "category", "header": "Category" },
        { "name": "value", "header": "Value" }
      ]);

    this.config.view = false;
    this.config.edit = false;


    this.dataSource = Observable.create((observer:any) => {
      // Runs on every search
      observer.next(this.asyncSelected);
    }).mergeMap((token:string) => this.getStatesAsObservable(token));


    this.allocations = new Array<Collateral>();

  }

  ngOnInit(): void {

    this.exposure  = new Exposure();
    this.allocation = new Allocation(this.exposure);
    this.statistics = AllocationStatisticFactory.create(this.allocation);

    this.loadPositions();
  }


  ngOnChanges(changes: SimpleChanges){
    if (this.exposure != undefined){
      this.allocation = new Allocation(this.exposure);
      this.statistics = AllocationStatisticFactory.create(this.allocation);    
    }
  }


  loadPositions(): void {
    this.collateralService.collaterals$.subscribe((positions: Collateral[]) => {
      this.positions = positions;
    });
  }

  cancel(){
    this.collateral = undefined;
  }

  add(collateral: Collateral){
    this.allocation.add(collateral);
    this.statistics = AllocationStatisticFactory.create(this.allocation);    
    this.allocations.push(collateral);
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

  public getStatesAsObservable(token:string):Observable<any> {
    let query = new RegExp(token, 'ig');
 
    return Observable.of(
      this.positions.filter((state:any) => {
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
    this.collateral = e.item;
  }



}
