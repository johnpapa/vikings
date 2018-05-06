import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

import { CoreModule } from './core.module';

@Injectable({ providedIn: CoreModule })
export class ToastService {
  constructor(public snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string) {
    setTimeout(() => this.snackBar.open(message, action, { duration: 2000 }), 0);
  }
}
