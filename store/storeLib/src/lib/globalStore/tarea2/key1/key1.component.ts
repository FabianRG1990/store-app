import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'store-key1',
  standalone: true,
  templateUrl: './key1.component.html',
  styleUrl: './key1.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Key1Component {}

