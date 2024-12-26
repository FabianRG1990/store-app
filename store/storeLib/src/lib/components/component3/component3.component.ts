import { Component, inject } from '@angular/core';
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
 currentStatus$: Observable<number> = inject(AppStore).currentStatus$;

  private readonly appStore = inject(AppStore);
  setStatus() {
    this.appStore.setStatus(3);
  }
}
