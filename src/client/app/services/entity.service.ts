import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable, Subject} from 'rxjs/Rx';
import {Contact} from '../models/contact.ts';

@Injectable()
export class EntityService {

  private _contacts$: Subject<Contact[]>; 
  private dataStore: {
    contacts: Contact[]
  };

  constructor(private http: Http) {
    this.dataStore = { contacts: [] };
    this._contacts$ = <Subject<Contact[]>>new Subject();

    this.loadAllContacts();
  }

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

  getContract(): any {
   return this.http.get('app/data/contracts.json')
   .map((res: Response) => {
     return res.json();
   });
  }

  get contact$(): Observable<Contact[]> {
    return this._contacts$.asObservable();
  }

  loadAllContacts(): void {
    this.http.get('app/data/contacts.json').map(response => response.json()).subscribe(data => {
      this.dataStore.contacts = data;
      this._contacts$.next(this.dataStore.contacts);
    }, error => console.log('Could not load contacts.'));
  }

  loadContact(id: any) {
    this.http.get('app/data/contacts.json').map(response => response.json()).subscribe(data => {
      let notFound = true;

      this.dataStore.contacts.forEach((item, index) => {
        if (item.id === data.id) {
          this.dataStore.contacts[index] = data;
          notFound = false;
        }
      });

      if (notFound) {
        this.dataStore.contacts.push(data);
      }

      this._contacts$.next(this.dataStore.contacts);
    }, error => console.log('Could not load contact.'));
  }

  create(contact: Contact) {
    this.dataStore.contacts.push(contact);
    this._contacts$.next(this.dataStore.contacts);
    /*
    this.http.post('app/data/contacts.json', JSON.stringify(contact))
      .map(response => response.json()).subscribe(data => {
        this.dataStore.contacts.push(data);
        this._contacts$.next(this.dataStore.contacts);
      }, error => console.log('Could not create contact.'));
    */
  }

  update(contact: Contact) {
    this.http.put('app/data/contacts.json', JSON.stringify(contact))
      .map(response => response.json()).subscribe(data => {
        this.dataStore.contacts.forEach((contact, i) => {
          if (contact.id === data.id) { this.dataStore.contacts[i] = data; }
        });

        this._contacts$.next(this.dataStore.contacts);
      }, error => console.log('Could not update contact.'));
  }

  remove(contactId: number) {
    this.http.delete('app/data/contacts.json').subscribe(response => {
      this.dataStore.contacts.forEach((contact, i) => {
        if (contact.id === contactId) { this.dataStore.contacts.splice(i, 1); }
      });

      this._contacts$.next(this.dataStore.contacts);
    }, error => console.log('Could not delete contact.'));
  }


}
