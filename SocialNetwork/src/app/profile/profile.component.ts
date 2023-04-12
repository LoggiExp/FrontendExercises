import { map } from 'rxjs';
import { Component, Input } from '@angular/core';
import { UserService } from '../api/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  @Input() ID!: number;
  constructor(private userService: UserService) {}

  //utilizzando la parte commentata non funziona, rifacendo i metodi del service qui funziona.. li onsidera vuoti ma non capisco
  // user$ = this.userService.getUsersbyId(this.ID);
  // posts$ = this.userService.getPostsbyId(this.ID);
  user$ = this.userService.getUsers().pipe(map((users) => users[this.ID]));
  posts$ = this.userService
    .getPosts()
    .pipe(map((posts) => posts.filter((post) => post.userId === this.ID)));
}
