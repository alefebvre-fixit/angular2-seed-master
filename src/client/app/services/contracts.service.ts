import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class ContractsService {

  constructor(private http: Http) {}

  query(): any {
   return this.http.get('app/data/contracts.json')
   .map((res: Response) => {
     return res.json();
   });
  }

  get(id: string): any {
   return this.http.get('app/data/contracts.json')
   .map((res: Response) => {
     let item: any;
     res.json().forEach((s: any) => {
       if (s.item_id === id) {
         item = s;
       }
     });
     return item;
   });
  }
}
