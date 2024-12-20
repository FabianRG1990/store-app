import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'store-component-component2',
  imports: [CommonModule],
  templateUrl: './component2.component.html',
  styleUrl: './component2.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Component2Component {}
