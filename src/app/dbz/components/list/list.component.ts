import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../intefaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {

  @Input()
  public characterList: Character[] = [];

  // onDeleteCharacter: EventEmitter<Character> = new EventEmitter();

  @Output()
  onDelete: EventEmitter<string> = new EventEmitter();
  // onNewCharacter: EventEmitter<Character> = new EventEmitter();
  onDeleteCharacter( id?: string ):void {
    if ( !id ) return;
    this.onDelete.emit( id );
  }

}
