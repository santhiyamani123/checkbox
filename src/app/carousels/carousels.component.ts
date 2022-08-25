import { Component, Input, OnInit } from '@angular/core';

interface carouselImage {
  imageSrc: string;
  imageAlt: string;
}


@Component({
  selector: 'app-carousels',
  templateUrl: './carousels.component.html',
  styleUrls: ['./carousels.component.scss']
})
export class CarouselsComponent implements OnInit {

 @Input() images: carouselImage[]=[]
 @Input() indicators  = true;
 @Input() controls = true;
 @Input() autoSlide = false;
 @Input() slideInterval = 3000;

 selectedIndex=0;

 


  ngOnInit(): void {

    if(this.autoSlide){
      this.autoSlideImages();
    }

  }
  
  //change slide in every 3 seconds

  autoSlideImages():void{
    setInterval(()=> {
      this.onNextClick();
    },this.slideInterval);
  }
  

  //set index of image on dot/indicators click

  selectImage(index:number): void{
    this.selectedIndex=index;
  }

  onPrevClick():void{
    if(this.selectedIndex === 0){
      this.selectedIndex = this.images.length - 1;
    }
    else{
      this.selectedIndex--;
    }

  }

  onNextClick():void{
    if(this.selectedIndex === this.images.length - 1){
      this.selectedIndex = 0
    }
    else{
      this.selectedIndex++;

    }

  }




}
