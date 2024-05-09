import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';

@Component({
  selector: 'app-swiper-js',
  standalone: true,
  imports: [],
  templateUrl: './swiper-js.component.html',
  styleUrl: './swiper-js.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SwiperJsComponent {
  title: string = 'Materi Swipper Js';
  subTitle: string = 'Effect Card Swiper Js'
}
