/* eslint-disable @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

import { changeState } from '../global-state.actions';
import { Store } from '@ngrx/store';
import { selectGlobalState } from '../global-state.selectors';

@Component({
  selector: 'store-store1',
  standalone: true,
  templateUrl: './componentN1.component.html',
  styleUrl: './componentN1.component.scss',
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class StoreComponent1 {
  //* Inyectamos el Store para interactuar con NgRx
  private store = inject(Store);

    //* Usamos el selector para obtener "globalState"
    globalState$: Observable<number> = this.store.select(selectGlobalState);

    //*antes del selector de ngRx
  //   globalState$: Observable<number> = this.store.select(
  //   (state) => state.globalState);


  changeStateTo1() {
    this.store.dispatch(changeState({ newState: 1 }));
  }
}
