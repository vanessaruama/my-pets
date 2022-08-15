import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { PoMenuItem, PoModalAction } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private router: Router
  ) {}

  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', action: this.onClick.bind(this) },
    { label: 'Donos do Pet', action: this.gotoOwners.bind(this)}
  ];

  private onClick() {
    alert('Clicked in menu item')
  }

  gotoOwners(): void {
    this.router.navigate(['owners']);
  }

}
