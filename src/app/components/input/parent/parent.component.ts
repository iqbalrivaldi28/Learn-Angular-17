import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
})
export class ParentComponent {
  headTitle = 'Doukumentasi Belajar Angular 17';

  input = 'Materi Input: ';
  textTitle = 'Ini adalah Teks Input';
  textDesc = 'Input itu mengirim data dari Parent ke Child';

  output = 'Materi Output: ';
  getMessage($event: string) {
    alert($event);
  }
}
