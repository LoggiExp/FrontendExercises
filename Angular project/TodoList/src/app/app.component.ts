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
  
  listRemove(element: string) {
    for(let i = 0; i < this.list.length; i++){
      if (this.list[i].content === element){
        this.list.splice(i, 1)
      }
    }
  }

  isChecked(element: string){
    for(let i = 0; i < this.list.length; i++){
      if (this.list[i].content === element){
       this.list[i].isChecked = !this.list[i].isChecked;
      }
    }
  }
}
