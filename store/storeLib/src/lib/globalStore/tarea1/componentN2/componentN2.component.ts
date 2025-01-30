/* eslint-disable @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import { selectGlobalState } from '../../store/global-state.selectors';
import { changeState } from '../../store/global-state.actions';

@Component({
  selector: 'store-store2',
  standalone: true,
  templateUrl: './componentN2.component.html',
  styleUrl: './componentN2.component.scss',
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StoreComponent2 {

  private store = inject(Store);

  globalState$: Observable<number> = this.store.select(selectGlobalState);

  changeStateTo2() {
    this.store.dispatch(changeState({ newState: 2 }));
  }
}
