
import { RouterModule, Routes} from '@angular/router';


export const routes: Routes = [

 
  { 
    path: 'home',
    loadChildren: './home-m/home-m.module#HomeMModule'

   },
  { 
    path: 'politics',
    loadChildren: './politics-m/politics-m.module#PoliticsMModule'
   },
  { 
    path: 'sports',
    loadChildren: './sports-m/sports-m.module#SportsMModule'
  },
  { 
    path: 'entertainment',
    loadChildren: './entertainment-m/entertainment-m.module#EntertainmentMModule'
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }

];


