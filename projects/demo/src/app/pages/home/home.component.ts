import { Component } from '@angular/core';
import { CounterComponent } from '../../components/counter/counter.component';
import { GreetingComponent } from '../../components/greeting/greeting.component';
import { CoreComponent } from 'core';
import { DatePipe } from '@angular/common';
@Component({
  standalone: true,
  imports: [CounterComponent, GreetingComponent, CoreComponent, DatePipe],
  template: `
    <h2>Home Page</h2>
    <isdi-greeting></isdi-greeting>
    <isdi-counter></isdi-counter>
    <isdi-core></isdi-core>
    {{ today | date : 'fullDate' }}
  `,
  styles: ``,
})
export default class HomeComponent {
  today = new Date();
}
