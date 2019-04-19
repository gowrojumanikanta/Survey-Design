import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntertainmentComponent } from '../entertainment-m/entertainment/entertainment.component';
import { EntertainmentMRoutingModule } from './entertainment-m-routing.module';

@NgModule({
  declarations: [EntertainmentComponent],
  imports: [
    CommonModule,
    EntertainmentMRoutingModule
  ]
})
export class EntertainmentMModule { }
