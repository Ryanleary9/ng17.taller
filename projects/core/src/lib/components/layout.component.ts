import { Component } from '@angular/core';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';

@Component({
  selector: 'isdi-layout',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  template: `
    <isdi-header>
      <ng-content select=".menu"></ng-content>
    </isdi-header>
    <ng-content select=".main"></ng-content>

    <isdi-footer></isdi-footer>
  `,
  styles: ``,
})
export class LayoutComponent {}
