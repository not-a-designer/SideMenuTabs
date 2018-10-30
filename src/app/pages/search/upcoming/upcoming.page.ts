import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.page.html',
  styleUrls: ['./upcoming.page.scss'],
})
export class UpcomingPage implements OnInit {

  eventType: string = 'upcoming';

  constructor() { }

  ngOnInit() {
  }

}
