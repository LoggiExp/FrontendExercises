import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { UserService } from '../api/user.service';
import { ActivatedRoute } from '@angular/router';
import { Post, User } from '../api/models';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  ID: number;
  user$: Observable<User[]>;
  posts$: Observable<Post[]>;
  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) {
    this.ID = this.activatedRoute.snapshot.params['id'];
    this.user$ = this.userService.getUsersbyId(this.ID);
    this.posts$ = this.userService.getPostsbyId(this.ID);
  }
}
