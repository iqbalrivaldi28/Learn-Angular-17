import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-ngstyle',
  standalone: true,
  imports: [NgClass, NgStyle, NgIf, NgFor],
  templateUrl: './directive-ngstyle.component.html',
  styleUrl: './directive-ngstyle.component.scss',
})
export class DirectiveNgstyleComponent {
  title = 'Materi Directive NgStyle: ';

  products = [
    {
      id: 0,
      name: 'Jersey Indonesia',
      price: 50000,
      imgUrl:
        'https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/12/28/06a400bd-fa61-40be-b5b4-bef00a525b01.jpg',
      stock: 10,
    },
    {
      id: 1,
      name: 'Jersey Arsenal',
      price: 150000,
      imgUrl:
        'https://images.tokopedia.net/img/cache/700/VqbcmM/2023/3/8/060ef9d7-9d0c-4870-b109-70aed7a63e89.jpg',
      stock: 5,
    },
    {
      id: 2,
      name: 'Jersey Liverpol',
      price: 120000,
      imgUrl:
        'https://images.tokopedia.net/img/cache/500-square/product-1/2020/10/13/2908419/2908419_a8868358-134f-40ea-969d-0fd5630a4cd4_1000_1000.jpg',
      stock: 0,
    },
  ];
}
