import { Component, inject } from '@angular/core';
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
currentStatus$: Observable<number> = inject(AppStore).currentStatus$;

  private readonly appStore = inject(AppStore);
  setStatus() {
    this.appStore.setStatus(2);
  }
}
