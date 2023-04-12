import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post, User } from './models';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  USERS = 'https://jsonplaceholder.typicode.com/users';
  POSTS = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private httpClient: HttpClient) {}

  getUsers() {
    return this.httpClient.get<User[]>(this.USERS);
  }

  getUsersbyId(id: number) {
    return this.getUsers().pipe(
      map((users) => users.filter((user) => user.id === id))
    );
  }

  getPosts() {
    return this.httpClient.get<Post[]>(this.POSTS);
  }

  getPostsbyId(id: number) {
    return this.getPosts().pipe(
      map((posts) => posts.filter((post) => post.userId === id))
    );
  }
}
