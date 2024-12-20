import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'store-component-component1',
  imports: [CommonModule],
  templateUrl: './component1.component.html',
  styleUrl: './component1.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Component1Component {}
