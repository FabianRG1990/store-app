import { createAction, props } from '@ngrx/store';

export const changeState = createAction(
  '[Global State] Change State',
  props<{ newState: number }>() 
);
