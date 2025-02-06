import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { loadCharacters, loadCharactersSuccess, loadCharactersFailure } from './global-state.actions';
import { SwapiService } from './swapi.service';
import { of } from 'rxjs';

@Injectable()
export class GlobalEffects {
  private actions$ = inject(Actions);
  private swapiService = inject(SwapiService);

  loadCharacters$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCharacters),
      mergeMap(() =>
        this.swapiService.getCharacters().pipe(
          map(characters => loadCharactersSuccess({ characters })),
          catchError(error => of(loadCharactersFailure({ error: error.message })))
        )
      )
    )
  );
}
