import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-main-intro',
  standalone: true,
  templateUrl: './main-intro.component.html',
  styleUrls: ['./main-intro.component.css']
})
export class MainIntroComponent implements AfterViewInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const slides = document.querySelectorAll('.carousel-slide');
      let currentSlide = 0;

      function showNextSlide() {
        slides[currentSlide].classList.remove('active');
        const textContainer = slides[currentSlide].querySelector('.text-container');
        textContainer?.classList.remove('animate');

        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');

        const nextTextContainer = slides[currentSlide].querySelector('.text-container');
        nextTextContainer?.classList.add('animate');
      }

      setInterval(showNextSlide, 5000); // Change slide every 5 seconds
    }
  }
}
