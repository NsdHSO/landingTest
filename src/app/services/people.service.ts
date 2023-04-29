import { Injectable } from '@angular/core';
import { delay, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { PersonModel } from '../models/person-model';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  headerTable: string [];
  private mockPeopleList = [
    {
      firstName: 'John',
      lastName: 'Doe',
      age: '21',
      workTitle: 'Wanna be Signer'
    },
    { firstName: 'Jane', lastName: 'Doe', age: '22', workTitle: 'Signer' },
    { firstName: 'Bob', lastName: 'Barker', age: '80', workTitle: 'TV Host' },
    {
      firstName: 'John',
      lastName: 'Doe',
      age: '21',
      workTitle: 'Wanna be Signer'
    },
  ];

  constructor(){
  }

  getPeople(): Observable<PersonModel[]>{
    return of(this.mockPeopleList).pipe(map((persons) => {
      return persons.map(person => {
        return {
          lastName: person.lastName,
          age: +person.age,
          firstName: person.firstName,
          jobTitle: person.workTitle
        } as PersonModel;
      });
    }),
      tap(datas => {
        this.headerTable = Object.keys(datas[0]);
      }),
      delay(1000));
  }
}
