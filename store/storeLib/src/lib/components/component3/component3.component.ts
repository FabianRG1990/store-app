import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'store-component-component3',
  imports: [CommonModule],
  templateUrl: './component3.component.html',
  styleUrl: './component3.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Component3Component {}
