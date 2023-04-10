import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'todoList';
  value = '';
  list: string[] = [];

  addToList(value: string) {
    this.list.push(value);
    this.value = '';
  }
}
