// keys.store.ts
import { ComponentStore } from '@ngrx/component-store';
import { Injectable } from '@angular/core';
import { Observable, tap, switchMap, map, catchError, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface Character {
  name: string;
}

interface KeyState {
  key1: string;
  key2: number;
  key3: boolean;
  characters: Character[]; // Nuevo campo para almacenar personajes
  loading: boolean; // Nuevo campo para indicar carga
  error: null; // Nuevo campo para manejar errores
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
  readonly updateKey1 = this.updater((state, key1: string) => ({
    ...state,
    key1,
  }));

  readonly updateKey2 = this.updater((state, key2: number) => ({
    ...state,
    key2,
  }));

  readonly updateKey3 = this.updater((state, key3: boolean) => ({
    ...state,
    key3,
  }));

  readonly updateAll = this.updater(
    (
      state,
      {
        key1,
        key2,
        key3,
      }: {
        key1: string;
        key2: number;
        key3: boolean;
      }
    ) => ({
      ...state,
      key1,
      key2,
      key3,
    })
  );

  // Método para limpiar el estado
  readonly resetState = this.updater((state) => ({
    ...state,
    key1: 'Valor inicial',
    key2: 0,
    key3: false,
    characters: [],
    loading: false,
    error: null,
  }));

    // Método para buscar en SWAPI por nombre
    readonly searchCharacters = this.effect((name$: Observable<string>) => {
      return name$.pipe(
        tap(() => this.patchState({ loading: true, error: null })), // Inicia la carga
        switchMap((name) =>
          this.http.get(`https://swapi.dev/api/people/?search=${name}`).pipe(
            map((response: any) => {
              this.patchState({
                characters: response.results,
                loading: false
              });
            }),
            catchError((error) => {
              this.patchState({
                error: error.message,
                loading: false
              });
              return of(null); // Maneja el error sin romper el flujo
            })
          )
        )
      );
    });
}
