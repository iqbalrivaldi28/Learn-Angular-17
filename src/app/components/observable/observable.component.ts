import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

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

  ngOnInit(): void {
    console.log('Observable Component');

    const myObservale = new Observable((subcriber) => {
      subcriber.next('Hello Observale');
      subcriber.complete();
    });

    this.subscription = myObservale.subscribe({
      next: (data) => console.log(data),
      error: (err) => console.log('Something wrong occured: ' + err),
      complete: () => console.log('done'),
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }
}
