import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-interceptor',
  standalone: true,
  imports: [],
  templateUrl: './interceptor.component.html',
  styleUrl: './interceptor.component.scss',
})
export class InterceptorComponent {
  title: string = 'Materi Interceptor: ';
  ket: string = 'Lihat di inspect element untuk interceptornya';
  data: any;

  constructor(private httpClient: HttpClient) {
    this.fetchData();
  }

  fetchData() {
    return this.httpClient
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe({
        next: (data) => {
          this.data = data;
        },
        error: (err) => console.log('Error: ', err),
        complete: () => console.log('Done'),
      });
  }
}
