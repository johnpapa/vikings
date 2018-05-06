import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VillainsRoutingModule } from './villains-routing.module';
import { VillainDetailComponent } from './villain-detail/villain-detail.component';
import { VillainsComponent } from './villains/villains.component';
import { VillainListComponent } from './villain-list/villain-list.component';
import { VillainService } from './villain.service';
import { SharedModule } from '../shared/shared.module';
import { NgMaterialModule } from '../ng-material/ng-material.module';

@NgModule({
  imports: [CommonModule, SharedModule, NgMaterialModule, VillainsRoutingModule],
  exports: [VillainsComponent, VillainDetailComponent],
  declarations: [VillainsComponent, VillainDetailComponent, VillainListComponent]
})
export class VillainsModule { }
