import { Component } from '@angular/core';
import { UserService } from './api/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'SocialNetwork';
  

  constructor(private userService: UserService) {}

}

