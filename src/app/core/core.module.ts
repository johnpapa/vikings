import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgMaterialModule } from '../ng-material/ng-material.module';
import { SharedModule } from '../shared/shared.module';
import { ModalComponent } from './modal/modal.component';
import { throwIfAlreadyLoaded } from './module-import-check';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  imports: [
  CommonModule,
  BrowserAnimationsModule,
  SharedModule,
  NgMaterialModule,
  RouterModule, // because we use <router-outlet> and routerLink
  ],
  declarations: [ToolbarComponent, ModalComponent],
  exports: [BrowserAnimationsModule, ToolbarComponent],
  entryComponents: [ModalComponent],
  })
export class CoreModule {
  constructor(
  @Optional()
  @SkipSelf()
    parentModule: CoreModule,
  ) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
