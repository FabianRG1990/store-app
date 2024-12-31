/* eslint-disable @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

import { AppState } from '../app.state';
import { changeState } from '../global-state.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'store-store3',
  standalone: true,
  templateUrl: './componentN3.component.html',
  styleUrl: './componentN3.component.scss',
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StoreComponent3 {
  
  private store = inject<Store<AppState>>(Store);
  globalState$: Observable<number> = this.store.select(
    (state) => state.globalState
  );

  changeStateTo3() {
    this.store.dispatch(changeState({ newState: 3 }));
  }
}
