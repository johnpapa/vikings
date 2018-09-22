import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { openCloseAnimation, slideInAnimation } from './core/animations';

@Component({
  selector: 'vk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation, openCloseAnimation],
  })
export class AppComponent {
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

