import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class EntityService {

  constructor(private http: Http) {}

  getAll(): any {
   return this.http.get('app/data/entities.json')
   .map((res: Response) => {
     return res.json();
   });
  }

  getOneById(id: string): Observable<any> {
   return this.http.get('app/data/entities.json')
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

  getContacts(): any {
   return this.http.get('app/data/contacts.json')
   .map((res: Response) => {
     return res.json();
   });
  }

  getContract(): any {
   return this.http.get('app/data/contracts.json')
   .map((res: Response) => {
     return res.json();
   });
  }

}
