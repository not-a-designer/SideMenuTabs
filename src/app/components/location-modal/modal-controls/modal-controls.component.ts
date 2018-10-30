import { Component, Input, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { ActionSheetOptions } from '@ionic/core';


export interface ModalControl {
  icon: string;
  text: string;
};


@Component({
  selector: 'modal-controls',
  templateUrl: './modal-controls.component.html',
  styleUrls: ['./modal-controls.component.scss']
})
export class ModalControlsComponent implements OnInit {

  @Input('mode') mode: string;
  @Input('favorite') favorite: any;


  controls: Array<ModalControl> = [
    { icon: 'call',     text: 'Call' }, 
    { icon: 'star',     text: 'Add to Favorites' }, 
    { icon: 'navigate', text: 'Directions' }, 
    { icon: 'share',    text: 'Share' }
  ];

  constructor(private actionSheetCtrl: ActionSheetController) { }

  ngOnInit() {
  }

  public async showMore() {
    const actionSheetButtons = [];
    for (let control of this.controls) {
      actionSheetButtons.push({
        text: control.text,
        icon: control.icon,
        handler: () => {
          console.log(`${control.text} clicked`);
          /*switch (control.icon) {
            case 'call': {
              console.log(`${control.text} clicked`)
              break;
            }
            case 'star': {

              break;
            }
            case 'navigate': {

              break;
            }
            case 'share': {

              break;
            }
          }*/
        }
      });
    }
    actionSheetButtons.push({
      text: 'Cancel',
      role: 'cancel',
      icon: 'close',
      handler: () => console.log('action sheet cancelled')
    });

    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Actions',
      buttons: actionSheetButtons
    });
    await actionSheet.present();
  }

}
