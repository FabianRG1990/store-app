import { provideStore } from '@ngrx/store';
import { appReducers } from './app.state';
import { provideEffects } from '@ngrx/effects';

export const StoreProviders = [
  provideStore(appReducers),
  provideEffects([]),
];
