/* eslint-disable @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

import { changeState } from '../../store/global-state.actions';
import { Store } from '@ngrx/store';
import { selectGlobalState } from '../../store/global-state.selectors';

@Component({
  selector: 'store-store3',
  standalone: true,
  templateUrl: './componentN3.component.html',
  styleUrl: './componentN3.component.scss',
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StoreComponent3 {

  private store = inject(Store);

  globalState$: Observable<number> = this.store.select(selectGlobalState);

  changeStateTo3() {
    this.store.dispatch(changeState({ newState: 3 }));
  }
}
