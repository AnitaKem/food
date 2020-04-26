import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlainSearchComponent } from './containers/plain-search/plain-search.component';


const routes: Routes = [
  {
    path: 'search',
    component: PlainSearchComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
