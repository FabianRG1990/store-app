import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { updateKey2 } from '../../store/global-state.actions';
import { selectKey2 } from '../../store/global-state.selectors';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'store-key2',
  standalone: true,
  templateUrl: './key2.component.html',
  styleUrl: './key2.component.scss',
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Key2Component {
  private store = inject(Store);

    globalStatekey2$: Observable<number> = this.store.select(selectKey2);



    changeKey2(){
      this.store.dispatch(updateKey2({key2: 25}));
      console.log('accion enviada');
    }

}

