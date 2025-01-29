import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'store-key-all',
  standalone: true,
  templateUrl: './keyAll.component.html',
  styleUrl: './keyAll.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KeyAllComponent {}
