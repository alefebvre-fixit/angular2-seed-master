import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import { URL_BASE } from './services.config';

@Injectable()
export class ExposuresService {

  constructor(private http: Http) {}

/*
  getAll(): any {
   return this.http.get(URL_BASE + 'exposures')
   .map((res: Response) => {
     return res.json();
   });
  }

  getOneById(id: string): Observable<any> {
    console.log(URL_BASE + 'exposures/' + id);
   return this.http.get(URL_BASE + 'exposures/' + id)
   .map((res: Response) => {
     return res.json();
   });
  }

  getUnderlyingsByExposureId(id: string): Observable<any> {
    console.log(URL_BASE + 'exposures/' + id + '/underlyings');
   return this.http.get(URL_BASE + 'exposures/' + id + '/underlyings')
   .map((res: Response) => {
     return res.json();
   });
  }
*/

  getAll(): any {
   return this.http.get('app/data/exposures.json')
   .map((res: Response) => {
     return res.json();
   });
  }

  getUnderlyingsByExposureId(id: string): any {
   return this.http.get('app/data/underlyings.json')
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
