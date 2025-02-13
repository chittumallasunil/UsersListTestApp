import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.model';
import { root } from 'rxjs/internal-compatibility';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUserData() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
