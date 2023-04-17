import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../api/models';
import { UserService } from '../api/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-profile',
  templateUrl: './search-profile.component.html',
  styleUrls: ['./search-profile.component.scss']
})
export class SearchProfileComponent {
  selected = NaN;
  users$: Observable<User[]>;
  constructor (private userService: UserService, private router: Router) {
    this.users$ = this.userService.getUsers();
  }

  showProfile(){
    this.router.navigate(['profile/' + this.selected])
  }
}
