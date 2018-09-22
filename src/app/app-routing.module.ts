import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'heroes' },
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
