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

export const selectKey2 = createSelector(
  selectAppState,
  (appState) => appState.key2
);

export const selectKey3 = createSelector(
  selectAppState,
  (appState) => appState.key3
);


export const selectCharacters = createSelector(
  selectAppState,
  (state) => state.characters
);

export const selectLoading = createSelector(
  selectAppState,
  (state) => state.loading
);

export const selectError = createSelector(
  selectAppState,
  (state) => state.error
);
