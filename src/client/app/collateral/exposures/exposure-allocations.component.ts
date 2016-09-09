import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

import { SectionComponent } from '../../shared/index';
import { InventoryService } from '../../services/index';
import { TYPEAHEAD_DIRECTIVES } from 'ng2-bootstrap/components/typeahead';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  moduleId: module.id,
  selector: "exposure-allocations",
  templateUrl: 'exposure-allocations.component.html',
  styleUrls: ['exposure-allocations.component.css'],
  directives: [
    ROUTER_DIRECTIVES, SectionComponent, TYPEAHEAD_DIRECTIVES
  ],
  viewProviders: [ InventoryService ],
})

export class ExposureAllocationsComponent implements OnInit {


  positions: Object[];

  constructor(private router: Router, private inventoryService: InventoryService) {

    this.dataSource = Observable.create((observer:any) => {
      // Runs on every search
      observer.next(this.asyncSelected);
    }).mergeMap((token:string) => this.getStatesAsObservable(token));

  }

  ngOnInit(): void {
    this.loadPositions();
  }

  loadPositions(): void {
    this.inventoryService.getPositions().subscribe((positions: Object[]) => {
      this.positions = positions;
    });
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
    console.log('Selected value: ', e.item);
  }



}
