import { Component } from '@angular/core';
import jsonData from './data/users.json'

@Component({
  selector: 'app-display-json',
  standalone: true,
  imports: [],
  templateUrl: './display-json.component.html',
  styleUrl: './display-json.component.scss',
})
export class DisplayJsonComponent {
  users: any[] = jsonData.users;
}
