import { Component } from '@angular/core';

@Component({
  selector: 'isdi-header',
  standalone: true,
  imports: [],
  template: `
    <h1>Header</h1>
    <ng-content></ng-content>
  `,
  styles: ``,
})
export class HeaderComponent {}
