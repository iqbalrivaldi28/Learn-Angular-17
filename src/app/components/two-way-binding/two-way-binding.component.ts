import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './two-way-binding.component.html',
  styleUrl: './two-way-binding.component.scss',
})
export class TwoWayBindingComponent {
  title = 'Materi Two Way Binding: ';
  desc = '';

  @Input() counter!: number;
  @Output() counterChange = new EventEmitter<number>(); //? Nama event counterChange harus sama yaitu pake counter

  increment() {
    this.handleChangeCounter(this.counter + 1);
  }

  decrement() {
    if (this.counter > 0) {
      this.handleChangeCounter(this.counter - 1);
    }
  }

  reset() {
    this.handleChangeCounter((this.counter = 0));
  }

  handleChangeCounter(value: any) {
    this.counterChange.emit(value);
  }
}
