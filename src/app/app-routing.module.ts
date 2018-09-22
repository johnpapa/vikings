import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    component: HomeComponent,
    data: { animation: 'HomePage' },
  },
  {
    path: 'heroes',
    loadChildren: 'app/heroes/heroes.module#HeroesModule',
    data: { animation: 'HeroesPage' },
  },
  {
    path: 'villains',
    loadChildren: 'app/villains/villains.module#VillainsModule',
    data: { animation: 'VillainsPage' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  })
export class AppRoutingModule {}
