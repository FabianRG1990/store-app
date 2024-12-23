import { Component } from '@angular/core';
import { AppStore } from '../app.store';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'store-component2',
  standalone: true,
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.scss'],
  imports: [CommonModule]
})
export class Component2Component {
  currentStatus$: Observable<number>;

  constructor(private readonly appStore: AppStore) {
    // Inicializamos currentStatus$ después de la inyección del appStore
    this.currentStatus$ = this.appStore.currentStatus$;
  }

  setStatus() {
    this.appStore.setStatus(2); // Cambiar el estado global a 2
  }
}
