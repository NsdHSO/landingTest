import { Component, OnInit } from '@angular/core';
import { PeopleService } from "../../services/people.service";
import { Observable } from "rxjs";
import { PersonModel } from "../../models/person-model";

@Component({
  selector: 'app-people-component',
  templateUrl: './people.component.html',
  styleUrls: [ './people.component.scss' ]
})
export class PeopleComponent implements OnInit {

  // TODO: Include the PersonService and get the list of People
  public peoples: Observable<PersonModel[]>;

  constructor(private readonly peopleService: PeopleService){
  }

  ngOnInit(){
    this.peoples = this.peopleService.getPeople();
  }

}
