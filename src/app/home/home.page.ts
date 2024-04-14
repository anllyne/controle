import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  activeSlide = 1;
  totalSlides = 3; // Defina o número total de slides aqui

  constructor() {}

  prevSlide() {
    if (this.activeSlide > 1) {
      this.activeSlide--;
    }
  }

  nextSlide() {
    if (this.activeSlide < this.totalSlides - 1) {
      this.activeSlide++;
    }
  }
}
