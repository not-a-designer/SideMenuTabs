import { Coffee }      from "@app-interfaces/coffee";
import { CoffeeShop }  from "@app-interfaces/coffee-shop";
import { CoffeeVenue } from "@app-interfaces/coffee-venue";


export interface CoffeeMedia {
    count: number;
    items: MediaItem;
};


export interface MediaItem {
    checked_in: number;
    coffee:     Coffee;
    created_at: string;
    photo_id:   number;
    photo:      MediaItemPhoto;
    roaster:    CoffeeShop;
    user:       any;
    venue:      Array<CoffeeVenue>;    
};


export interface MediaItemPhoto {
    photo_img_sm: string;
    photo_img_md: string;
    photo_img_lg: string;
    photo_img_og: string;
};


export interface CoffeeFriendList {
    count: number;
    items: Array<any>;
};