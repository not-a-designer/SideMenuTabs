import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule }                     from '@angular/common';
import { FormsModule }                      from '@angular/forms';

import { IonicModule }                      from '@ionic/angular';

//import { LocationComponent }                from '@app-components/app-location/app-location.component';
import { LoginComponent }                   from '@app-components/auth/login/login.component';
import { RadiusSliderComponent }            from '@app-components/radius-slider/radius-slider.component';
import { RegisterComponent }                from '@app-components/auth/register/register.component';
import { MapViewComponent }                 from '@app-components/map/map-view/map-view.component';
import { ListViewComponent }                from '@app-components/map/list-view/list-view.component';
import { StarRatingComponent }              from '@app-components/location-modal/star-rating/star-rating.component';
import { ModalControlsComponent }           from '@app-components/location-modal/modal-controls/modal-controls.component';


@NgModule({
    declarations: [
        ListViewComponent,
        //LocationComponent, 
        LoginComponent, 
        MapViewComponent, 
        RadiusSliderComponent, 
        RegisterComponent, 
        StarRatingComponent, 
        ModalControlsComponent
    ],

    imports: [ 
        CommonModule, 
        FormsModule, 
        IonicModule 
    ],

    exports: [
        ListViewComponent,
        //LocationComponent, 
        LoginComponent, 
        MapViewComponent,
        RadiusSliderComponent, 
        RegisterComponent,
        StarRatingComponent, 
        ModalControlsComponent
    ],

    entryComponents: [ 
        ListViewComponent,
        LoginComponent, 
        //LocationComponent,
        MapViewComponent,
        RegisterComponent,
        StarRatingComponent, 
        ModalControlsComponent
    ],

    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ComponentsModule {}