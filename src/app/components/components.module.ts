import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule }                     from '@angular/common';

import { IonicModule }                      from '@ionic/angular';

import { LocationComponent }                from '@app-components/app-location/app-location.component';
import { RadiusSliderComponent }            from '@app-components/radius-slider/radius-slider.component';


@NgModule({
    declarations: [ LocationComponent, RadiusSliderComponent ],

    imports: [ CommonModule, IonicModule ],

    exports: [ LocationComponent, RadiusSliderComponent ],

    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ComponentsModule {}