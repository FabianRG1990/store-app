import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common'; // Elimina AsyncPipe si no lo usas
import { KeysStore } from './keys.store';
import { provideComponentStore } from '@ngrx/component-store';
import { LetDirective, PushPipe } from '@ngrx/component';

@Component({
  selector: 'store-keys',
  standalone: true,
  templateUrl: './keys.component.html',
  styleUrl: './keys.component.scss',
  imports: [CommonModule, LetDirective, PushPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideComponentStore(KeysStore)],
})
export class KeysComponent {
  readonly keysStore = inject(KeysStore);

}
