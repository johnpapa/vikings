import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { routes } from './routes';
import { AppComponent } from './app.component';
import {
  ModalComponent,
  ToolbarComponent,
  httpInterceptorProviders
} from './core';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { NgMaterialModule } from './ng-material/ng-material.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgMaterialModule,
    SharedModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [AppComponent, HomeComponent, ToolbarComponent, ModalComponent],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {}
