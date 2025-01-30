import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'store-key-all',
  standalone: true,
  templateUrl: './keyAll.component.html',
  styleUrl: './keyAll.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KeyAllComponent {
  private store = inject(Store);
  changeKeyAll() {
    this.store.dispatch({
      type: '[App] Update All Keys',
      key1: 'cambio general',
      key2: 100,
      key3: false,
    });
  }
}


