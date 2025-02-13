import { Component, VERSION } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  users: any = [];
  constructor(private userService: UserService) {}
  ngOnInit() {
    this.userService.getUserData().subscribe((res) => {
      this.users = res;
    });
  }
}
