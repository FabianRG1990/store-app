// keys.store.ts
import { ComponentStore } from '@ngrx/component-store';
import { Injectable } from '@angular/core';

interface KeyState {
  key1: string;
  key2: number;
  key3: boolean;
}

@Injectable()
export class KeysStore extends ComponentStore<KeyState> {
  constructor() {
    super({
      key1: 'Valor inicial 1',
      key2: 0,
      key3: false
    });
  }

  // Selectores
  readonly key1$ = this.select(state => state.key1);
  readonly key2$ = this.select(state => state.key2);
  readonly key3$ = this.select(state => state.key3);

  // Updaters
  readonly updateKey1 = this.updater((state, key1: string) => ({
    ...state,
    key1
  }));

  readonly updateKey2 = this.updater((state, key2: number) => ({
    ...state,
    key2
  }));

  readonly updateKey3 = this.updater((state, key3: boolean) => ({
    ...state,
    key3
  }));

  readonly updateAll = this.updater((state, {
    key1,
    key2,
    key3
  }: {
    key1: string;
    key2: number;
    key3: boolean;
  }) => ({
    ...state,
    key1,
    key2,
    key3
  }));
}
