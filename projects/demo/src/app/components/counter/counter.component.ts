import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'isdi-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
  number: number = 0;
  handleCounter(operation: boolean) {
    if (operation === true) {
      this.number += 1;
    } else {
      this.number -= 1;
    }
  }
}
