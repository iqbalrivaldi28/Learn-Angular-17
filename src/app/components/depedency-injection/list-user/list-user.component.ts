import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../interface/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.scss',
})
export class ListUserComponent {
  users: User[] = [];

  title = 'Matrei Depedency Injection: ';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getAllUser().then((res) => {
      this.users = res;
    });
  }
}
