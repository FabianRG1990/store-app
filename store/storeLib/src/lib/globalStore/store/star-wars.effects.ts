import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { loadCharacters, loadCharactersSuccess, loadCharactersFailure } from './star-wars.actions';

@Injectable()
export class StarWarsEffects {
  constructor(
    private actions$: Actions,
    private http: HttpClient
  ) {}

  loadCharacters$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCharacters),
      mergeMap(() =>
        this.http.get('https://swapi.dev/api/people/').pipe(
          map((data: any) => loadCharactersSuccess({ characters: data.results })),
          catchError(() => of(loadCharactersFailure()))
        )
      )
    )
  );
}
