import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { DUMMY_USERS } from '../users';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  @Input({ required: true }) userName!: string;
  @Input({ required: true }) id!: string;

  @Output() select = new EventEmitter();

  selectUser() {
    this.select.emit(this.id);
  }
}
