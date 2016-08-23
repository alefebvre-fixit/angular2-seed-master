import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class InventoryService {

  constructor(private http: Http) {}

  getPositions(): any {
   return this.http.get('app/data/inventory.json')
   .map((res: Response) => {
     return res.json();
   });
  }

  getMockPositions(): any {
   return this.http.get('app/data/inventory.json')
   .map((res: Response) => {
         setTimeout(() => {
     return res.json();
    }, 2000);
   });
  }


}
