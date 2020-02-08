import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

const api = '/api';

@Injectable({ providedIn: 'root' })
export class SettingsService {
  constructor(private http: HttpClient) {}

  getSettings() {
    return this.http.get<any>(`${api}/settings`).pipe(
      map(settings => settings[0] || {}),
      catchError(e => of({ name: 'In Memory API' }))
    );
  }
}
