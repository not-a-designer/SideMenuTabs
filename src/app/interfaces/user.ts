import { Coffeeshop } from '@app-interfaces/coffeeshop';
import { Coffeecard } from '@app-interfaces/coffeecard';


export interface User {
    email: string;
    isAdmin: boolean;
    uid: string;
    birthdate?: string;
    cards?: Array<Coffeecard>;
    displayName?: string;
    favorite?: Coffeeshop;
    firstName?: string;
    lastName?: string;
    phone?: string; 
}