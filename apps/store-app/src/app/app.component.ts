
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreComponent1, StoreComponent2, StoreComponent3 } from '@store-ws/store-lib';

@Component({
  imports: [ RouterModule, StoreComponent1, StoreComponent2, StoreComponent3],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'store-app';
}
