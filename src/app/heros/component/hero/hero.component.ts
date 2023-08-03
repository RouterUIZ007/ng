import { Component } from '@angular/core';

@Component({
  selector: 'app-heros-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'Iron Man';
  public age: number = 56;

  get capitalizaName(): string {
    return this.name.toUpperCase();
  }
  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }
  changeName(): void {
    this.name = 'Spider Man';
  }
  changeAge(): void {
    this.age = 24;
  }
  resetInfo(): void {
    
    this.name = 'Iron Man';
    this.age = 56;
  }
}
