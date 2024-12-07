import { Component } from '@angular/core';
import { Header } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './users';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUser = this.users[0];

  onSelectUser(id: string) {
    const user = Object.values(this.users).find((user) => user.id === id);
    if (!user) {
      throw new EvalError('could not find user to id' + id);
    } else {
      this.selectedUser = user;
    }
  }
}
