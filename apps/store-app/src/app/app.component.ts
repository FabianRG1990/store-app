
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StarWarsCharactersComponent} from '@store-ws/store-lib';

@Component({
  imports: [ RouterModule, StarWarsCharactersComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'store-app';
}
