import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PoliticsComponent} from '../politics-m/politics/politics.component';
import { PoliticsMRoutingModule } from './politics-m-routing.module';


@NgModule({
  
  imports: [
    CommonModule,
    PoliticsMRoutingModule
  ],
  declarations: [PoliticsComponent],
})
export class PoliticsMModule { }
