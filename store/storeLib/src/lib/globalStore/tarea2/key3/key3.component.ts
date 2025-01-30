import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { updateKey3 } from '../../store/global-state.actions';
import { selectKey3 } from '../../store/global-state.selectors';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'store-key3',
  standalone: true,
  templateUrl: './key3.component.html',
  styleUrl: './key3.component.scss',
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Key3Component {
  private store = inject(Store);

  globalStatekey3$: Observable<boolean> = this.store.select(selectKey3);



  changeKey3(){
    this.store.dispatch(updateKey3({key3: true}));
    console.log('accion enviada');
  }

}
