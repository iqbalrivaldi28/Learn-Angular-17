import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  standalone: true,
  imports: [],
  templateUrl: './property-binding.component.html',
  styleUrl: './property-binding.component.scss',
})
export class PropertyBindingComponent {
  title = 'Property Binding';
  paragraf = 'Property ini menggunakan 2 gaya pendenatan';
  documentataionLink = 'https://angular.io/guide/property-binding';

  //? Property BInding Pada DIV
  contentClas = 'defaultClass';
  isClassSpecial = true;

  changeClassType(type: string) {
    if (type === 'special') {
      this.isClassSpecial = true;
      this.contentClas = 'specialClass';
      this.title = 'Special Class';
    } else {
      this.isClassSpecial = false;
      this.contentClas = 'defaultClass';
      this.title = 'Default Class';
    }
  }

  @Input() parentData = '';
}
