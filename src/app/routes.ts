import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    component: HomeComponent,
    data: { animation: 'HomePage' }
  },
  {
    path: 'heroes',
    loadChildren: () =>
      import('./heroes/heroes.module').then(m => m.HeroesModule),
    data: { animation: 'HeroesPage' }
  },
  {
    path: 'villains',
    loadChildren: () =>
      import('./villains/villains.module').then(m => m.VillainsModule)
    // data: { animation: 'VillainsPage' }
  }
];
