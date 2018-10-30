import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';

@Component({
  selector: 'app-coffee-search',
  templateUrl: './coffee-search.page.html',
  styleUrls: ['./coffee-search.page.scss'],
})
export class CoffeeSearchPage implements OnInit {

  viewMode: string;
  searchPlaceholder: string;
  locale: string = 'local';

  constructor(private route: ActivatedRoute) { 
    this.route.params.subscribe((params) => {
      this.setPlaceHolder(params.view);
    });
  }

  ngOnInit() {
  }

  public setPlaceHolder(view: string): void {
    this.searchPlaceholder = `Search ${view} coffees`;
    
  }

}
