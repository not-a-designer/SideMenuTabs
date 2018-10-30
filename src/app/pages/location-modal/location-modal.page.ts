import { Component, OnInit } from '@angular/core';

import { NavParams,
         Platform, 
         ModalController}    from '@ionic/angular';


@Component({
  selector: 'location-modal',
  templateUrl: './location-modal.page.html',
  styleUrls: ['./location-modal.page.scss'],
})
export class LocationModalPage implements OnInit {

  constructor(private navParams: NavParams, 
              private platform: Platform,
              private modalCtrl: ModalController) { }

  ngOnInit() {
    
  }

  dismiss() { this.modalCtrl.dismiss() }

  onBackdropTap(event) {
    console.log('backdrop tapped');
    console.log(event);
  }
}
