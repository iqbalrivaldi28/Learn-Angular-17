import { Component } from '@angular/core';
import jsonData from './data/users.json';
import { DataService } from './data/data.service';

export interface dataApi {
  id: number;
  name: string;
  email: string;
}
@Component({
  selector: 'app-display-json',
  standalone: true,
  imports: [],
  templateUrl: './display-json.component.html',
  styleUrl: './display-json.component.scss',
})
export class DisplayJsonComponent {
  users: any[] = jsonData.users;
  apiUserData: dataApi[] = [];
  error!: string;
  complated: boolean = false;

  title = 'Materi Display data From Json Local and API'

  constructor(private dataService: DataService) {
    this.getData()
  }

  getData() {
    this.dataService.getUsers().subscribe({
      next: (data: any) => (this.apiUserData = data),
      error: (err) => (this.error = err),
      complete: () => (this.complated = true),
    });
  }
}
