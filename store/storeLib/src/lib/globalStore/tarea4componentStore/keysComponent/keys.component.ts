import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { KeysStore } from './keys.store';

@Component({
  selector: 'store-keys',
  standalone: true,
  templateUrl: './keys.component.html',
  styleUrl: './keys.component.scss',
  imports: [CommonModule, AsyncPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [KeysStore], // Proveemos el store a nivel componente
})
export class KeysComponent {

  private readonly keysStore = inject(KeysStore);

  // Exponemos los valores del estado
  key1$ = this.keysStore.key1$;
  key2$ = this.keysStore.key2$;
  key3$ = this.keysStore.key3$;
  characters$ = this.keysStore.characters$;
  loading$ = this.keysStore.loading$;
  error$ = this.keysStore.error$;

  // Métodos para actualizar
  updateKey1() {
    this.keysStore.updateKey1(`Nuevo valor 1 - ${Date.now()}`);
  }

  updateKey2() {
    this.keysStore.updateKey2(Math.floor(Math.random() * 100));
  }

  updateKey3() {
    this.keysStore.updateKey3(!this.keysStore.state().key3);
  }

  updateAll() {
    this.keysStore.updateAll({
      key1: 'Todas actualizadas',
      key2: 999,
      key3: true
    });
  }

  // funcion para limpiar state
  resetState() {
    this.keysStore.resetState();
  }

  // Función para cargar personajes de swapi
  searchCharacters(name: string) {
    this.keysStore.searchCharacters(name);
  }
}
