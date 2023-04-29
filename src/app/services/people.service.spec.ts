import { fakeAsync, TestBed } from '@angular/core/testing';

import { PeopleService } from './people.service';
import { of } from "rxjs";
import { PersonModel } from "../models/person-model";

describe('PeopleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PeopleService = TestBed.get(PeopleService);
    expect(service).toBeTruthy();
  });
  it('should return correct object', fakeAsync(() => {
    const service: PeopleService = TestBed.get(PeopleService);
    const expectedValue = [{
      firstName: 'John',
      lastName: 'Doe',
      age: 21,
      jobTitle: 'Wanna be Signer'
    }] as PersonModel[];
    spyOn(service, 'getPeople').and.returnValue(of(expectedValue));
    service.getPeople().subscribe(value => {
      expect(value).toEqual(expectedValue);

    });
  }));
  it('should return not correct object', fakeAsync(() => {
    const service: PeopleService = TestBed.get(PeopleService);
    const expectedValue = [];
    spyOn(service, 'getPeople').and.returnValue(of(expectedValue));
    service.getPeople().subscribe(value => {
      expect(value).not.toEqual([...expectedValue, {}]);

    });
  }));
});
