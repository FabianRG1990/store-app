import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'store-star-wars-characters',
  standalone: true,
  templateUrl: './starWarsCharacters.component.html',
  styleUrl: './starWarsCharacters.component.scss',
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StarWarsCharactersComponent {}
