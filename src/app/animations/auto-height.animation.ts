import { animate, 
         animation,
         state, 
         style, 
         transition, 
         trigger,
         useAnimation } from '@angular/animations';


/** HELPER FUNCTIONS **/
const growAnimation = animation([
    animate('250ms ease-in', style({ height: 350 }))
]);

const shrinkAnimation = animation([
    animate('250ms ease-out', style({ height: 300 }))
]);
/** END HELPER FUNCTIONS **/


/** APP ANIMATIONS **/
export const autoHeight = trigger('autoHeight', [
    state('void', style({ height: 0 })),
    state('register', style({ height: 300 })),
    state('login', style({ height: 350 })),

    transition('void => login', animate(250, style({ height: 350 }))),
    transition('login => register', useAnimation(shrinkAnimation)),
    transition('register => login', useAnimation(growAnimation))
]);