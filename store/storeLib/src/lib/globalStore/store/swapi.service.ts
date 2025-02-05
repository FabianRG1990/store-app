import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SwapiService {
  getUser() {
    return of({ id: 1, name: 'John Doe' }).pipe(delay(1000));
  }
}
