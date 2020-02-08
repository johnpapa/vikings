import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'hammerjs';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';
import { AppDevModule } from './app/app-dev.module';

if (environment.production) {
  enableProdMode();
}

// If you want to pretend there is a database
platformBrowserDynamic().bootstrapModule(AppDevModule);

// If you have a real database, use this
// platformBrowserDynamic().bootstrapModule(AppModule);
