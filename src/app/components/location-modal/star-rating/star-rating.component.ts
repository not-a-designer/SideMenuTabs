import { Component, Input, OnInit } from '@angular/core';
import { runInThisContext } from 'vm';


export const TOTAL_STARS: number = 5;

interface StarType {
  icon: string;
}

@Component({
  selector: 'star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit {

  @Input('rating') public rating: any;

  private starsArray: Array<StarType> = [];

  constructor() { }

  ngOnInit() {
    console.log('comp rating: ', this.rating);
    let ratingSplit: Array<string> = [];

    //correct for type input
    const rateString: string = (typeof this.rating === 'number' || this.rating instanceof Number || !isNaN(this.rating)) ?
      this.rating.toString() : 
      <string>this.rating;

    if (rateString.indexOf('.') < 0) ratingSplit.push(<string>this.rating);
    else ratingSplit = [ ...rateString.split('.') ];

    console.log('ratingSplit: ', ...ratingSplit);

    if (+ratingSplit[1] === 0) {
      const s: number = +ratingSplit[0];
      for (let i = 0; i < s; i++) this.starsArray.push({ icon: 'star' });
      if (s < TOTAL_STARS) {
        const missingStars: number = TOTAL_STARS - s;
        for (let j = 0; j < missingStars; j++) this.starsArray.push({ icon: 'star-outline' });
      }
    }
    else {
      const s: number = +ratingSplit[0];
      for (let i = 0; i < s; i++) this.starsArray.push({ icon: 'star' });
      this.starsArray.push({ icon: 'star-half' });
      if ((s + 1) <= TOTAL_STARS) {
        const missingStars = TOTAL_STARS - (s + 1);
      for (let j = 0; j < missingStars; j++) this.starsArray.push({ icon: 'star-outline' });
      }
    }
          
    
    this.starsArray.map((star) => star.icon)
  }

}
