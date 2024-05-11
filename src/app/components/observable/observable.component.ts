import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Observable, Subscription, map } from 'rxjs';

@Component({
  selector: 'app-observable',
  standalone: true,
  imports: [],
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.scss',
})
export class ObservableComponent {
  title: string = 'Materi Observable: ';

  subscription?: Subscription;
  BASE_URL: string = 'https://jsonplaceholder.typicode.com/users';
  data: any;

  httpClient = inject(HttpClient);

  ngOnInit(): void {
    console.log('Observable Component');

    const myObservale = new Observable((subcriber) => {
      subcriber.next('Hello Observale');
      subcriber.complete();
    });

    this.subscription = myObservale.subscribe({
      next: (data) => {
        console.log(data);
        this.data = data;
      },
      error: (err) => console.log('Something wrong occured: ' + err),
      complete: () => console.log('done'),
    });

    //? From API
    this.fetchData().subscribe({
      next: (data) => console.log('Response:', data),
      error: (err) => console.log('Error: ', err),
      complete: () => console.log('Done'),
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  //? From API
  fetchData() {
    return this.httpClient
      .get(this.BASE_URL)
      // .pipe(map((response: any) => response.data));
  }
}
