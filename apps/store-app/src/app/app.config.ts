import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideEffects } from '@ngrx/effects';
import { GlobalEffects } from '@store-ws/store-lib';
import { provideStore } from '@ngrx/store';
import { appReducer } from 'store/storeLib/src/lib/globalStore/store/global-state.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideStore({app:appReducer}), // Provide your reducers
    provideEffects([GlobalEffects]), // Provide your effects
    // Other providers...

  ],
};
