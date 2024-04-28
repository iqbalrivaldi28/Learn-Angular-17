import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-structural',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './directive-structural.component.html',
  styleUrl: './directive-structural.component.scss',
})
export class DirectiveStructuralComponent {
  title = 'Materi Structural Directive: ';

  cars = [
    {
      name: 'Creta',
      brand: 'Hyundai',
      color: 'White',
      discount: 10,
      imgUrl:
        'https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/3/30/d4672627-d53a-40c8-9f17-0afc40741707.jpg',
    },
    {
      name: 'Hrv',
      brand: 'Honda',
      color: 'White',
      discount: 5,
      imgUrl:
        'https://hondapati.com/wp-content/uploads/2022/03/All-New-Honda-HR-V-1-683x400.png',
    },
    {
      name: 'Fortuner',
      brand: 'Toyota',
      color: 'White',
      discount: 10,
      imgUrl:
        'https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/indizone/2021/08/31/Z8sPY1y/toyota-fortuner-yang-dijual-di-thailand-ternyata-miliki-teknologi-lebih-canggih70.jpg',
    },
    {
      name: 'XPander',
      brand: 'Mitsubishi',
      color: 'Grey',
      discount: 30,
      imgUrl:
        'https://imgx.gridoto.com/crop/0x0:0x0/700x465/photo/2022/03/15/screenshot_20220315-151629_insta-20220315031638.jpg',
    },
  ];
}
