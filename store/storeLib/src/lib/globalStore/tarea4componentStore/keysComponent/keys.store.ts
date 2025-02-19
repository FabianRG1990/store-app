import { ComponentStore } from '@ngrx/component-store';
import { tapResponse } from '@ngrx/operators';
import { Injectable } from '@angular/core';
import { Observable, tap, switchMap } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

export interface Character {
  name: string;
}

interface SwapiResponse {
  results: Character[];
}

interface KeyState {
  key1: string;
  key2: number;
  key3: boolean;
  characters: Character[];
  loading: boolean;
  error: string | null;
}

@Injectable()
export class KeysStore extends ComponentStore<KeyState> {
  constructor(private http: HttpClient) {
    super({
      key1: 'Valor inicial 1',
      key2: 0,
      key3: false,
      characters: [],
      loading: false,
      error: null,
    });
  }

  // Selectores
  readonly key1$ = this.select((state) => state.key1);
  readonly key2$ = this.select((state) => state.key2);
  readonly key3$ = this.select((state) => state.key3);
  readonly characters$ = this.select((state) => state.characters);
  readonly loading$ = this.select((state) => state.loading);
  readonly error$ = this.select((state) => state.error);

  // Updaters
  readonly updateKey1 = this.updater((state) => ({
    ...state,
    key1: 'key1 en 0',
  }));

  readonly updateKey2 = this.updater((state) => ({
    ...state,
    key2: 2525,
  }));

  readonly updateKey3 = this.updater((state) => ({
    ...state,
    key3: true,
  }));

  readonly updateAll = this.updater((state) => ({
      ...state,
      key1: 'Actualizado',
      key2: 999,
      key3: false,
    })
  );

  // Método para limpiar el estado
  readonly resetState = this.updater((state) => ({
    ...state,
    key1: 'Valor inicial 1',
    key2: 0,
    key3: false,
    characters: [],
    loading: false,
    error: null,
  }));

  // Efecto para actualizar todas las keys con valores definidos internamente
  readonly setDefaultValues = this.updater(() => ({
    key1: 'Valor por defecto dado por el efecto',
    key2: 100,
    key3: true,
    characters: [],
    loading: false,
    error: null,
  }));

  // Método para buscar en SWAPI por nombre
  readonly searchCharacters = this.effect((name$: Observable<string>) => {
    return name$.pipe(
      tap(() => this.patchState({ loading: true, error: null })), // Inicia la carga
      switchMap((name) =>
        this.http.get<SwapiResponse>(`https://swapi.dev/api/people/?search=${name}`).pipe(
          tapResponse(
            // Actualiza el estado con los personajes
            (response: any) => {
              this.patchState({
                characters: response.results,
                loading: false,
              });
            },
            // Error: Actualiza el estado con el mensaje de error
            (error: HttpErrorResponse) => {
              this.patchState({
                error: error.message,
                loading: false,
              });
            }
          )
        )
      )
    );
  });
}
