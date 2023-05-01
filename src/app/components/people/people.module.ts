import { NgModule } from '@angular/core';
import { PeopleComponent } from './people.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [ PeopleComponent ],
  exports: [ PeopleComponent ],
  imports: [ RouterModule.forChild([ {
    path: '',
    component: PeopleComponent
  } ]), CommonModule ]
})
export class PeopleModule {
}
