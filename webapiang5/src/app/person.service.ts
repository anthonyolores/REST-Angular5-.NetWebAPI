import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import {Person} from './person';

 const httpOptions = {
   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
 };

@Injectable()
export class PersonService {

  handleError(arg0: any): any {
    throw new Error("Method not implemented.");
  }
  constructor(private http: HttpClient) { }

  getPeople(): Observable<Person[]>{
    return this.http
      .get<Person[]>('http://person.com:9088/api/people/getpeople');
  }

  getPerson(id:number): Observable<Person>{
    return this.http
      .get<Person>('http://person.com:9088/api/people/getperson/' + id);
  }

  putPerson(id:number, newPerson:Person){

    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    let url = `${"http://person.com:9088/api/people/putperson"}/${newPerson.Id}`;

    return this.http.put(url, newPerson, {headers: headers});
  }
  
  postPerson(newPerson:Person){

    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    let url = `${"http://person.com:9088/api/people/postperson"}`;

    return this.http.post(url, newPerson, {headers: headers});
  }

  deletePerson(id:number){

    let url = `${"http://person.com:9088/api/people/deleteperson"}/${id}`;

    return this.http.delete(url);
  }
}
