import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PoliticsComponent} from './politics/politics.component';
import {SportsComponent} from './sports/sports.component';
import {EntertainmentComponent} from './entertainment/entertainment.component';



export const routes: Routes = [

  { path: '', redirectTo:'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'politics', component: PoliticsComponent },
  { path: 'sports', component: SportsComponent},
  { path: 'entertainment', component: EntertainmentComponent}


];


