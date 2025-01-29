import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideStore } from '@ngrx/store';
import { appReducers } from 'store/storeLib/src/lib/globalStore/store/app.state';

bootstrapApplication(AppComponent, {
  providers: [
    provideStore(appReducers), // Proveer el Store con los reducers configurados
  ],
});
