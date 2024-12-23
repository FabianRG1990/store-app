import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';

export interface AppState {
  currentStatus: number; // Estado compartido para todos los componentes
}

@Injectable({
  providedIn: 'root',  // Esto asegura que el servicio esté disponible globalmente

})

export class AppStore extends ComponentStore<AppState> {
  constructor() {
    super({ currentStatus: 0 }); // Estado inicial
  }

  // Selector para observar el estado actual
  readonly currentStatus$ = this.select((state) => state.currentStatus);

  // Actualizador para cambiar el estado
  readonly setStatus = this.updater((state, status: number) => ({
    ...state,
    currentStatus: status,
  }));
}
