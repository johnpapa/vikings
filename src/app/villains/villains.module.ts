import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgMaterialModule } from '../ng-material/ng-material.module';
import { SharedModule } from '../shared/shared.module';
import { VillainDetailComponent } from './villain-detail/villain-detail.component';
import { VillainListComponent } from './villain-list/villain-list.component';
import { VillainsRoutingModule } from './villains-routing.module';
import { VillainsComponent } from './villains/villains.component';

@NgModule({
  imports: [CommonModule, SharedModule, NgMaterialModule, VillainsRoutingModule],
  exports: [VillainsComponent, VillainDetailComponent],
  declarations: [VillainsComponent, VillainDetailComponent, VillainListComponent],
  })
export class VillainsModule {}
