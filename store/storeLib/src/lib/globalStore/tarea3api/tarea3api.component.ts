import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { loadCharacters } from '../store/global-state.actions';
import { selectCharacters, selectLoading, selectError } from '../store/global-state.selectors';

@Component({
  selector: 'store-swapi',
  standalone: true,
  templateUrl: './tarea3api.component.html',
  styleUrl: './tarea3api.component.scss',
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwapiComponent {
    private store = inject(Store);

    characters$ = this.store.select(selectCharacters);
    loading$ = this.store.select(selectLoading);
    error$ = this.store.select(selectError);

    load() {
      this.store.dispatch(loadCharacters());
    }
  }

