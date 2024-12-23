
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Component1Component, Component2Component, Component3Component } from '@store-ws/store-lib';

@Component({
  imports: [ RouterModule, Component1Component, Component2Component, Component3Component ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'store-app';
}
