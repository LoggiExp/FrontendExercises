import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  USERS = "https://jsonplaceholder.typicode.com/users";
  POSTS = "https://jsonplaceholder.typicode.com/posts";

  constructor(private httpClient: HttpClient){}

  getUsers() {
    return this.httpClient.get<JSON>(this.USERS).subscribe();
  }
}
