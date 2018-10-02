import { NgModule } from '@angular/core';
import { DefaultDataServiceConfig, EntityMetadataMap, NgrxDataModule } from 'ngrx-data';
import { NgrxDataToastService } from './ngrx-data-toast.service';

export const entityMetadata: EntityMetadataMap = {
  Hero: {},
  Villain: {},
};

export const pluralNames = { Hero: 'Heroes' };

@NgModule({
  imports: [
  NgrxDataModule.forRoot({
    entityMetadata: entityMetadata,
    pluralNames: pluralNames,
    }),
  ],
  providers: [
  { provide: DefaultDataServiceConfig, useValue: null }, // TODO: delete this once fix is in ngrx-data
  ],
  })
export class EntityStoreModule {
  constructor(toastService: NgrxDataToastService) {}
}
