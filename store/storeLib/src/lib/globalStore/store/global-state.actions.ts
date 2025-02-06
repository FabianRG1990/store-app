import { createAction, props } from '@ngrx/store';

export const changeState = createAction(
  '[Global State] Change State',
  props<{ newState: number }>()
);
// Acción para actualizar key1
export const updateKey1 = createAction(
  '[App] Update Key1',
  props<{ key1: string }>()
);
// Acción para actualizar key2
export const updateKey2 = createAction(
  '[App] Update Key2',
  props<{ key2: number }>()
);
// Acción para actualizar key3
export const updateKey3 = createAction(
  '[App] Update Key3',
  props<{ key3: boolean }>()
);
// Acción para actualizar todos los keys
export const updateAllKeys = createAction(
  '[App] Update All Keys',
  props<{ key1: string; key2: number; key3: boolean }>()
);

// Agregar nuevas acciones para el API
export const loadCharacters = createAction('[SWAPI] Load Characters');
export const loadCharactersSuccess = createAction(
  '[SWAPI] Load Characters Success',
  props<{ characters: any[] }>()
);
export const loadCharactersFailure = createAction(
  '[SWAPI] Load Characters Failure',
  props<{ error: string }>()
);
