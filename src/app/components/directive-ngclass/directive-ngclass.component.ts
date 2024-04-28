import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-ngclass',
  standalone: true,
  imports: [NgClass],
  templateUrl: './directive-ngclass.component.html',
  styleUrl: './directive-ngclass.component.scss',
})
export class DirectiveNgclassComponent {
  title = 'Materi NgClass (Built In Directive): ';

  isSpecial = false;

  btnClasess = () => {
    return {
      btn: true,
      btnSpecial: this.isSpecial,
    };
  };
}
