import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';

import { Http, Response } from '@angular/http';

@Injectable()
export class ExposuresService {

  constructor(private http: Http) {}

  query(): any {
   return this.http.get('app/data/exposures.json')
   .map((res: Response) => {
     return res.json();
   });
  }

  getOneById(id: string): Observable<any> {
   return this.http.get('app/data/exposures.json')
   .map((res: Response) => {
     let item: any;
     res.json().forEach((s: any) => {
       if (s.id == id) {
         item = s;
       }
     });
     return item;
   });
  }

  
}
