import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable, Subject} from 'rxjs/Rx';
import {Collateral} from '../models/index';

@Injectable()
export class CollateralService {

  private _collaterals$: Subject<Collateral[]>; 
  private dataStore: {
    collaterals: Collateral[]
  };

  constructor(private http: Http) {
    this.dataStore = { collaterals: [] };
    this._collaterals$ = <Subject<Collateral[]>>new Subject();

    this.loadAllCollaterals();
  }

  get collaterals$(): Observable<Collateral[]> {
    return this._collaterals$.asObservable();
  }

  loadAllCollaterals(): void {
    this.http.get('app/data/collaterals.json').map(response => response.json()).subscribe(data => {
      this.dataStore.collaterals = data;
      this._collaterals$.next(this.dataStore.collaterals);
    }, error => console.log('Could not load collaterals.'));
  }

  loadCollateral(id: string) {
    this.http.get('app/data/collaterals.json').map(response => response.json()).subscribe(data => {
      let notFound = true;

      this.dataStore.collaterals.forEach((item, index) => {
        if (item.id === data.id) {
          this.dataStore.collaterals[index] = data;
          notFound = false;
        }
      });

      if (notFound) {
        this.dataStore.collaterals.push(data);
      }

      this._collaterals$.next(this.dataStore.collaterals);
    }, error => console.log('Could not load collateral.'));
  }

  create(collateral: Collateral) {
    this.dataStore.collaterals.push(collateral);
    this._collaterals$.next(this.dataStore.collaterals);
    /*
    this.http.post('app/data/collaterals.json', JSON.stringify(collateral))
      .map(response => response.json()).subscribe(data => {
        this.dataStore.collaterals.push(data);
        this._collaterals$.next(this.dataStore.collaterals);
      }, error => console.log('Could not create collateral.'));
    */
  }

  update(collateral: Collateral) {
    this.http.put('app/data/collaterals.json', JSON.stringify(collateral))
      .map(response => response.json()).subscribe(data => {
        this.dataStore.collaterals.forEach((collateral, i) => {
          if (collateral.id === data.id) { this.dataStore.collaterals[i] = data; }
        });

        this._collaterals$.next(this.dataStore.collaterals);
      }, error => console.log('Could not update collateral.'));
  }

  remove(id: string) {
    this.http.delete('app/data/collaterals.json').subscribe(response => {
      this.dataStore.collaterals.forEach((collateral, i) => {
        if (collateral.id === id) { this.dataStore.collaterals.splice(i, 1); }
      });

      this._collaterals$.next(this.dataStore.collaterals);
    }, error => console.log('Could not delete collateral.'));
  }

}
