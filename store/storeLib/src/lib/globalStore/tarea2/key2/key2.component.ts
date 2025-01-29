import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'store-key2',
  standalone: true,
  templateUrl: './key2.component.html',
  styleUrl: './key2.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Key2Component {}

