import { Injectable }      from '@angular/core';

import { ModalController } from '@ionic/angular';

import { Coffee }          from '@app-interfaces/coffee';
import { CoffeeModalPage } from '@app-pages/coffee-modal/coffee-modal.page';


@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  constructor(private modalCtrl: ModalController) { }

  public async showCoffeeModal(coffee: Coffee) {
    const coffeeModal = await this.modalCtrl.create({
      component: CoffeeModalPage,
      componentProps: { coffee: coffee },
      cssClass: 'info-window-modal'
    });
    await coffeeModal.present();
  }
}
