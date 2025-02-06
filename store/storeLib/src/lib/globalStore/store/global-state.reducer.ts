import { createReducer, on } from '@ngrx/store';
import {
  loadCharacters,
  loadCharactersFailure,
  loadCharactersSuccess,
  updateAllKeys,
  updateKey1,
  updateKey2,
  updateKey3,
} from './global-state.actions';
import { AppState } from './app.state';

export const initialState: AppState = {
  key1: 'Initial Key 0',
  key2: 0,
  key3: false,
  globalState: 0,
  characters: [],
  loading: false,
  error: null
};

export const appReducer = createReducer(
  initialState,

  // Actualizar key1
  on(updateKey1, (state, { key1 }) => ({
    ...state,
    key1,
  })),

  // Actualizar key2
  on(updateKey2, (state, { key2 }) => ({
    ...state,
    key2,
  })),

  // Actualizar key3
  on(updateKey3, (state, { key3 }) => ({
    ...state,
    key3,
  })),

  // Actualizar todos los keys
  on(updateAllKeys, (state, { key1, key2, key3 }) => ({
    ...state,
    key1,
    key2,
    key3,
  })),

    // Nuevos casos para el API
    on(loadCharacters, (state) => ({
      ...state,
      loading: true,
      error: null
    })),
    on(loadCharactersSuccess, (state, { characters }) => ({
      ...state,
      characters,
      loading: false
    })),
    on(loadCharactersFailure, (state, { error }) => ({
      ...state,
      error,
      loading: false
    })),
);

