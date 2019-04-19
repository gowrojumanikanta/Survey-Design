import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeMRoutingModule } from './home-m-routing.module';
import {HomeComponent} from '../home-m/home/home.component'

@NgModule({
   
  imports: [
    CommonModule,
    HomeMRoutingModule
  ],
  declarations: [HomeComponent]
})
export class HomeMModule { }
