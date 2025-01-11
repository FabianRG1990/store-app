import { createSelector } from '@ngrx/store';
import { AppState } from './app.state';

// Selector para obtener "globalState" del estado global
export const selectGlobalState = createSelector(
  (state: AppState) => state.globalState,
  (globalState) => globalState
);
