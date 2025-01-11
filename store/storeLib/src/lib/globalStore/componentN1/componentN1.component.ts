/* eslint-disable @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

import { AppState } from '../app.state';
import { changeState } from '../global-state.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'store-store1',
  standalone: true,
  templateUrl: './componentN1.component.html',
  styleUrl: './componentN1.component.scss',
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StoreComponent1 {

  private store = inject<Store<AppState>>(Store);
  
  globalState$: Observable<number> = this.store.select(
    (state) => state.globalState
  );

  changeStateTo1() {
    this.store.dispatch(changeState({ newState: 1 }));
  }
}
