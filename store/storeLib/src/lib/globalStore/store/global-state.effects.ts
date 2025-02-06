import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { updateKey1, updateKey2 } from './global-state.actions';
import { SwapiService } from './swapi.service';

@Injectable()
export class GlobalEffects {
#actions$ = inject(Actions)
#swapiService = inject(SwapiService)

  loadUser$ = createEffect(() =>
    this.#actions$.pipe(
      ofType(updateKey1),
      switchMap(() =>
        this.#swapiService.getUser().pipe(
          map((user) => updateKey2({ key2: user.id }))
        )
      )
    )
  );


}
