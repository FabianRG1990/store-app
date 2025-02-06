
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Key1Component, Key2Component, Key3Component, KeyAllComponent, SwapiComponent} from '@store-ws/store-lib';

@Component({
  imports: [ RouterModule, Key1Component, Key2Component, Key3Component, KeyAllComponent, SwapiComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'store-app';
}
