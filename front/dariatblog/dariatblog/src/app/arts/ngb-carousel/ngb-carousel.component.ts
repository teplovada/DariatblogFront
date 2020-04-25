import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ngb-carousel',
  templateUrl: './ngb-carousel.component.html',
  styleUrls: ['./ngb-carousel.component.sass'],
  providers: [NgbCarouselConfig],
})
export class NgbCarouselComponent {
  images = [
    {
      path: '/assets/arts/1.jpg',
      name: 'Название №1',
      year: 2020,
      location: 'Где-то там',
      paintingTechnique: 'Интересная техника',
    },
    {
      path: '/assets/arts/2.jpg',
      name: 'Название №2',
      year: 2020,
      location: 'Где-то там',
      paintingTechnique: 'Интересная техника',
    },
    {
      path: '/assets/arts/3.jpg',
      name: 'Название №3',
      year: 2020,
      location: 'Где-то там',
      paintingTechnique: 'Интересная техника',
    },
    {
      path: '/assets/arts/4.jpg',
      name: 'Название №4',
      year: 2020,
      location: 'Где-то там',
      paintingTechnique: 'Интересная техника',
    },
    {
      path: '/assets/arts/5.jpg',
      name: 'Название №5',
      year: 2020,
      location: 'Где-то там',
      paintingTechnique: 'Интересная техника',
    },
    {
      path: '/assets/arts/6.jpg',
      name: 'Название №6',
      year: 2020,
      location: 'Где-то там',
      paintingTechnique: 'Интересная техника',
    },
    {
      path: '/assets/arts/7.jpg',
      name: 'Название №7',
      year: 2020,
      location: 'Где-то там',
      paintingTechnique: 'Интересная техника',
    },
    {
      path: '/assets/arts/8.jpg',
      name: 'Название №8',
      year: 2020,
      location: 'Где-то там',
      paintingTechnique: 'Интересная техника',
    },
    {
      path: '/assets/arts/9.jpg',
      name: 'Название №9',
      year: 2020,
      location: 'Где-то там',
      paintingTechnique: 'Интересная техника',
    },
    {
      path: '/assets/arts/10.jpg',
      name: 'Название №10',
      year: 2020,
      location: 'Где-то там',
      paintingTechnique: 'Интересная техника',
    },
    {
      path: '/assets/arts/11.jpg',
      name: 'Название №11',
      year: 2020,
      location: 'Где-то там',
      paintingTechnique: 'Интересная техника',
    },
  ];
  constructor(config: NgbCarouselConfig) {
    config.interval = 10000;
    config.wrap = true;
    config.pauseOnHover = true;
    config.showNavigationArrows = true;
    config.showNavigationIndicators = false;
  }
}
