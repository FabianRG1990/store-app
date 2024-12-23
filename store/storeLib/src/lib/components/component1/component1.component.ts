import { Component } from '@angular/core';
import { AppStore } from '../app.store';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'store-component1',
  standalone: true,
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss'],
  imports: [ CommonModule], // Proveer el store en el componente
})
export class Component1Component {
  currentStatus$: Observable<number>;

  constructor(private readonly appStore: AppStore) {
    // Inicializamos currentStatus$ después de la inyección del appStore
    this.currentStatus$ = this.appStore.currentStatus$;
  }

  setStatus() {
    this.appStore.setStatus(1); // Cambiar el estado global a 1
  }
}
