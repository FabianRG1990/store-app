import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'store-key3',
  standalone: true,
  templateUrl: './key3.component.html',
  styleUrl: './key3.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Key3Component {}
