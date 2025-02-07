
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { KeysComponent, } from '@store-ws/store-lib';

@Component({
  imports: [ RouterModule, KeysComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'store-app';
}
