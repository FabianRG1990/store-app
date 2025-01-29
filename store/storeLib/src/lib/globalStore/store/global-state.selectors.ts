import { createSelector } from '@ngrx/store';
import { AppState } from './app.state';

export const selectGlobalState = createSelector((state: AppState) => state.globalState, (s) => s);



export const selecKey1 = createSelector((state: AppState) => state.key1, (s) => s);
