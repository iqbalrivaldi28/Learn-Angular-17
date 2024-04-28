import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  standalone: true,
  imports: [],
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.scss',
})
export class EventBindingComponent {
  title = 'Materti Event Binding: ';

  textSubTitle = '';

  greeting() {
    alert(
      'Hai Ini Event Binding \nIni akan ke Trigger ketika Button di KLik yaa'
    );

    this.textSubTitle = 'Saya belajar Event Binding Pada Angular 17';
  }
}
