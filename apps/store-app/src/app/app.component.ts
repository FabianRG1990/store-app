
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Key1Component, Key2Component, Key3Component, KeyAllComponent, StoreComponent1, StoreComponent2, StoreComponent3 } from '@store-ws/store-lib';

@Component({
  imports: [ RouterModule, StoreComponent1, StoreComponent2, StoreComponent3, Key1Component, Key2Component, Key3Component, KeyAllComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'store-app';
}
