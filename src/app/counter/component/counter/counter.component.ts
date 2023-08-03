import { Component } from '@angular/core';
@Component({
  selector: 'app-counter',
  templateUrl: 'counter.component.html',
  // template: `
  //   <p>{{counter}}</p>
  //   <button (click)="increaseBy(1)">+1</button>
  //   <button (click)="increaseBy(-1)">-1</button>
  //   <button (click)="resetCounter()">Reset</button>
  //   `,
})
export class CounterComponent {
  public counter: number = 10;

  public increaseBy(n: number): void {
    this.counter += n;
  }
  public resetCounter(): void {
    this.counter = 10;
  }
}