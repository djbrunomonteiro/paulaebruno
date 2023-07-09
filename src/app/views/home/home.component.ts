import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  slideIndexRef = 0;
  slidesRef: Swiper | undefined;
  sliderAtual = 0;

  ngOnInit(): void {
    this.proximo();
  }

  slideChanged(slides: any) {
    //get index do slide atual
    slides.getActiveIndex().then((index: number) => {
      if (!index) { return; };
      this.slideIndexRef = index;
    });
  }

  getSwiper(swiper: Swiper) {
    if (!swiper) { return; };
    this.slidesRef = swiper;
    this.sliderAtual = this.slidesRef?.realIndex;
  }

  proximo(){
    setTimeout(()=>{

      this.slidesRef?.slideNext()

    },1000)
  }

}
