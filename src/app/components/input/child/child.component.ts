import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent {
  @Input() textTitle = '';
  @Input() textDesc = '';

  @Output() btnOuput = new EventEmitter<string>();

  sendMessage() {
    this.btnOuput.emit('Ouput Mengirim data dari Child ke Parent');
  }
}
