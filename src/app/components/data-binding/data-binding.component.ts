import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss',
})
export class DataBindingComponent {
  dataBinding = 'Materi Data Binding: ';

  imgsrc = 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png';

  btnHide = 'Hide Image';
  btnSHow = 'Show Image';
  isShowImage = true;

  hideImage() {
    this.isShowImage = false;
  }

  showImage() {
    this.isShowImage = true;
  }

  textTwoWay = '';
}
