import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'vk-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  })
export class ToolbarComponent implements OnInit {
  labTitle = 'Vikings';

  labState = 'Welcome USA!';

  dbName = '';

  constructor(private settingsService: SettingsService) {}

  ngOnInit() {
    this.settingsService.getSettings().subscribe((settings) => {
      this.dbName = settings.name || 'n/a';
    });
  }
}
