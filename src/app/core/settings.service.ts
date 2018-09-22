import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

const api = '/api';

@Injectable({ providedIn: 'root' })
export class SettingsService {
  constructor(private http: HttpClient) {}

  getSettings() {
    return this.http.get<any>(`${api}/settings`).pipe(map(settings => settings[0] || {}));
  }
}
