import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import { FirestoreService }                 from '@app-services/firestore/firestore.service';
import { IonicStorageService }              from '@app-services/ionic-storage/ionic-storage.service';
import { GoogleMapsService }                from '@app-services/google-maps/google-maps.service';
import { CoffeeService }                    from '@app-services/coffee/coffee.service';
import { AuthService }                      from '@app-services/auth/auth.service';
import { ThemeService }                     from '@app-services/theme/theme.service';

@NgModule({
    providers: [
        AuthService,
        CoffeeService,
        FirestoreService,
        GoogleMapsService,
        IonicStorageService,
        ThemeService
    ]
})
export class ServicesModule {}