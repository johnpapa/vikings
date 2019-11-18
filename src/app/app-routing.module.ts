import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    component: HomeComponent,
    data: { animation: 'HomePage' },
  },
  {
    path: 'heroes',
    loadChildren: () => import('app/heroes/heroes.module').then(m => m.HeroesModule),
    data: { animation: 'HeroesPage' },
  },
  {
    path: 'villains',
    loadChildren: () => import('app/villains/villains.module').then(m => m.VillainsModule),
    data: { animation: 'VillainsPage' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  })
export class AppRoutingModule {}
