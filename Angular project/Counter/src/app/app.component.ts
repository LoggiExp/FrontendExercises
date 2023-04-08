import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project';
  counter: number = 0;

  addCounter() {
    this.counter++;
  }

  removeCounter() {
    this.counter--;
  }

  resetCounter() {
    this.counter = 0;
  }
}

