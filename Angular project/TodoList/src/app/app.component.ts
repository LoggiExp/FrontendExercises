import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'todoList';
  value = '';
  list: string[] = [];
  checkedState = false;
  
  addToList(value: string) {
    this.list.push(value);
    this.value = '';
  }
  
  listRemove(element: string) {
    for(let i = 0; i < this.list.length; i++){
      if (this.list[i] === element){
        this.list = this.list.slice(0, i).concat(this.list.slice(i + 1))
      }
    }
  }

  isChecked(){
    this.checkedState = !this.checkedState;
  }
}
