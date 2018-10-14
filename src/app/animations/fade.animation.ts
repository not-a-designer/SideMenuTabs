import { animate, 
         animation,
         state, 
         style, 
         transition, 
         trigger,
         useAnimation } from '@angular/animations';


/** HELPER FUNCTIONS **/
const fadeInAnimation = animation([
    style({ opacity: 0 }),
    animate('1000ms ease-out', style({ opacity: 1 }))
]);

const fadeOutAnimation = animation([
    style({ opacity: 1 }),
    animate('240ms ease-in', style({ opacity: 0 }))
]);
/** END HELPER FUNCTIONS **/


/** APP ANIMATIONS **/
export const fadeIn = trigger('fadeIn', [
    state('void', style({ opacity: 0 })),
    transition(':enter', useAnimation(fadeInAnimation))
]);

export const fadeOut = trigger('fadeOut', [
    state('void', style({ opacity: 0 })),
    transition(':leave', useAnimation(fadeOutAnimation))
]);

export const fade = trigger('fade', [
    state('void', style({ opacity: 0 })),
    transition(':enter', useAnimation(fadeInAnimation)),
    transition(':leave', useAnimation(fadeOutAnimation))
]);