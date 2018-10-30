import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coffeeshop-search',
  templateUrl: './coffeeshop-search.page.html',
  styleUrls: ['./coffeeshop-search.page.scss'],
})
export class CoffeeshopSearchPage implements OnInit {

  viewMode: string;
  searchPlaceholder: string;
  locale: string = 'local';

  constructor(private route: ActivatedRoute) { 
    this.route.params.subscribe((params) => {
      this.setPlaceHolder(params.view)
    });
  }

  ngOnInit() {
  }

  public setPlaceHolder(view: string): void {
    this.searchPlaceholder = `Search ${view} coffeeshops`;
  }
}
