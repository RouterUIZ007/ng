import { Component } from '@angular/core';

@Component({
  selector: 'app-heros-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroName: string[] = ['spiderMan', 'ironMan', 'antMan','blackWidow','Hulk'];
  public deleteHero?: string;


  public deleteLastHero(): void {
    this.deleteHero = this.heroName.pop();
  }
}
