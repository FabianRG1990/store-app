import { appReducers } from './app.state';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';

export const StoreProviders = [
  provideStore(appReducers),
  provideEffects([])
];
