import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'hammerjs';
import { AppDevModule } from './app/app-dev.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// If you want to pretend there is a database
platformBrowserDynamic().bootstrapModule(AppDevModule);

// If you have a real database, use this
// platformBrowserDynamic().bootstrapModule(AppModule);
