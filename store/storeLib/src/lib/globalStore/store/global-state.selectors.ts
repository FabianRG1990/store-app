import { createSelector } from '@ngrx/store';
import { AppState } from './app.state';

export const selectGlobalState = createSelector((state: AppState) => state.globalState, (s) => s);




// 🔹 Selecciona la parte "app" del estado global
export const selectAppState = (state: { app: AppState }) => state.app;


// 🔹 Selector para key1 (ahora accedemos a state.app.key1)
export const selectKey1 = createSelector(
  selectAppState, // Primero seleccionamos "app"
  (appState) => appState.key1 // Luego extraemos key1
);
