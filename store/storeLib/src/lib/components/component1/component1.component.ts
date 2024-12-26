import { Component, inject } from '@angular/core';
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
  // Usamos inject() directamente para inicializar currentStatus$
  currentStatus$: Observable<number> = inject(AppStore).currentStatus$;

  private readonly appStore = inject(AppStore);

  setStatus() {
    this.appStore.setStatus(1);
  }
}


//* antes de usar inject()
// export class Component1Component {
//   currentStatus$: Observable<number>;

//   constructor(private readonly appStore: AppStore) {
//     this.currentStatus$ = this.appStore.currentStatus$;
//   }

//   setStatus() {
//     this.appStore.setStatus(2);
//   }
// }
