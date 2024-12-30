import { createReducer, on } from '@ngrx/store';
import { changeState } from './global-state.actions';

export const initialGlobalState = 0;

export const globalStateReducer = createReducer(
  initialGlobalState,
  on(changeState, (state, { newState }) => newState) // Actualizamos el estado con el valor proporcionado
);
