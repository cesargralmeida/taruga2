import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { User } from './classes/user';
import { USERS } from './mock-database';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers(): Observable<User[]> {
    // TODO: send the message _after_ fetching the heroes
    //this.messageService.add('HeroService: fetched heroes');
    return of(USERS);
  }

  getUser(id: number): Observable<User> {
    // TODO: send the message _after_ fetching the hero
    //this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(USERS.find(user => user.id === id)!);
  }
}
