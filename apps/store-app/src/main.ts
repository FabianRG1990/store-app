import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideStore } from '@ngrx/store';
import { appReducers } from 'store/storeLib/src/lib/globalStore/store/app.state';

bootstrapApplication(AppComponent, {
  providers: [
    provideStore(appReducers)  // Aquí se registra el reducer
  ]
}).catch(err => console.error(err));
