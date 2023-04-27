import { Component } from '@angular/core';

type Element = {
  content: string,
  isChecked: boolean
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'todoList';
  value = '';
  list: Element[] = [];
  
  addToList(value: string) {
    let newElement: Element = {content: value, isChecked: false};
    this.list.push(newElement);
    this.value = '';
  }
  
  listRemove(i: number) {
    this.list.splice(i, 1)
  }

  checkElement(element: Element){
    element.isChecked = !element.isChecked;
  }
}
