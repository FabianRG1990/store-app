import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { updateKey1 } from '../../store/global-state.actions';
import { selectKey1 } from '../../store/global-state.selectors';

@Component({
  selector: 'store-key1',
  standalone: true,
  templateUrl: './key1.component.html',
  styleUrl: './key1.component.scss',
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Key1Component {
  private store = inject(Store);

  globalStatekey1$: Observable<string> = this.store.select(selectKey1);



  changeKey1(){
    this.store.dispatch(updateKey1({key1: 'key1'}));
    console.log('accion enviada');
  }

}

