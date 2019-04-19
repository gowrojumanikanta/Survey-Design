import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EntertainmentComponent} from './entertainment/entertainment.component';

const routes: Routes = [
  {
    path : '',
    component : EntertainmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntertainmentMRoutingModule { }
