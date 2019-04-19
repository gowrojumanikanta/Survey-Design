import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SportsMRoutingModule } from './sports-m-routing.module';
import { SportsComponent } from '../sports-m/sports/sports.component';

@NgModule({
  
  imports: [
    CommonModule,
    SportsMRoutingModule
  ],
  declarations: [SportsComponent]
})
export class SportsMModule { }
