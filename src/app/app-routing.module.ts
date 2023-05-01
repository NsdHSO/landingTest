import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'people',
    loadChildren: () => import('./components/people/people.module').then(m => m.PeopleModule)
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(
    routes,
    { relativeLinkResolution: 'legacy' }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
