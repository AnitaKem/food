import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlainSearchComponent } from './containers/plain-search/plain-search.component';
import { DrisComponent } from './containers/dris/dris.component';


const routes: Routes = [
  {
    path: 'search',
    component: PlainSearchComponent,
  },
  {
    path: 'dris',
    component: DrisComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
