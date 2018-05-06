import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroService } from './hero.service';
import { SharedModule } from '../shared/shared.module';
import { NgMaterialModule } from '../ng-material/ng-material.module';

@NgModule({
  imports: [CommonModule, SharedModule, NgMaterialModule, HeroesRoutingModule],
  exports: [HeroesComponent, HeroDetailComponent],
  declarations: [HeroesComponent, HeroDetailComponent, HeroListComponent]
})
export class HeroesModule { }
