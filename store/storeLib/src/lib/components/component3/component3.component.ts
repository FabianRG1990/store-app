import { Component } from '@angular/core';
import { AppStore } from '../app.store';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'store-component3',
  standalone: true,
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.scss'],
  imports: [CommonModule,]
})
export class Component3Component {
  currentStatus$: Observable<number>;

  constructor(private readonly appStore: AppStore) {
    // Inicializamos currentStatus$ después de la inyección del appStore
    this.currentStatus$ = this.appStore.currentStatus$;
  }

  setStatus() {
    this.appStore.setStatus(3); // Cambiar el estado global a 3
  }
}
