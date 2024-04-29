import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiUser } from '../interface/apiUser';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  BASE_URL = 'https://gorest.co.in/public/v2/users';

  users: ApiUser[] = [];

  constructor(private http: HttpClient) {}

  getUser(): Observable<ApiUser[]> {
    return this.http.get<ApiUser[]>(this.BASE_URL);
  }
}
