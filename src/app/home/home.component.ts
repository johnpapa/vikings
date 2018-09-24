import { Component, OnInit } from '@angular/core';
import { openCloseAnimation } from '../core/animations';

@Component({
  selector: 'vk-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [openCloseAnimation],
  })
export class HomeComponent implements OnInit {
  showLocal = false;

  showCloudReady = false;

  ngOnInit() {}
}
