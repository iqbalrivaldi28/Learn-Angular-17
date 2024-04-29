import { Component } from '@angular/core';
import { ApiUser } from '../interface/apiUser';
import { ApiService } from '../service/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-api',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-api.component.html',
  styleUrl: './user-api.component.scss',
})
export class UserApiComponent {
  apiUsers: ApiUser[] = [];
  error!: string;
  complated: boolean = false;

  title = 'Materi Http Client (Data Api): ';

  constructor(private apiService: ApiService) {
    this.getUser();
  }

  getUser() {
    this.apiService.getUser().subscribe({
      next: (data) => (this.apiUsers = data),
      error: (err) => (this.error = err),
      complete: () => (this.complated = true),
    });
  }
}
