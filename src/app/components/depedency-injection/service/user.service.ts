import { Injectable } from '@angular/core';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  async getAllUser(): Promise<User[]> {
    return [
      {
        firstName: 'Naisa',
        lastName: 'Yuriza',
        age: 16,
        hobby: 'reading',
      },
      {
        firstName: 'Hanna',
        lastName: 'Putri',
        age: 14,
        hobby: 'ngaji',
      },
      {
        firstName: 'Nasywa',
        lastName: 'Fadhillah',
        age: 12,
        hobby: 'photo',
      },
      {
        firstName: 'Natasha',
        lastName: 'Nurhalima',
        age: 16,
        hobby: 'acting',
      },
    ];
  }
}
