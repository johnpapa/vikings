import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';

const myModules = [
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatToolbarModule,
  MatTooltipModule,
];

@NgModule({
  imports: [myModules],
  exports: [myModules],
  declarations: [],
  })
export class NgMaterialModule {}
