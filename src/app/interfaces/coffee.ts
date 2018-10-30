import { CoffeeFriendList, CoffeeMedia } from "@app-interfaces/shared/shared.interface";
import { CoffeeShop }                    from "@app-interfaces/coffee-shop";


/** exported interface **/
export interface Coffee {
    cid:                number;
    coffee_name:        string;
    coffee_label:       string;
    coffee_abv:         number;
    coffee_ibu:         number;
    coffee_description: string;
    coffee_style:       string;
    is_in_production:   boolean;
    coffee_slug:        string;
    is_local:           boolean;
    created_at:         string;
    rating_count:       number;
    rating_score:       number;
    stats:              CoffeeStats;
    coffeeshop:         CoffeeShop;
    auth_rating:        number;
    wish_list:          boolean;
    media:              CoffeeMedia;
    similar:            SimilarCoffeeList;
    friends:            CoffeeFriendList;
};

/*
Coffee {
    roaster: Roaster;
    blend_name: string;
    roaster_location: string;
    origin: string;
    roast: string;
    price: string;
}
*/

/*

*/




/** private interfaces **/
interface CoffeeStats {
    total_count:      number;
    monthly_count:    number;
    total_user_count: number;
    user_count:       number;
};

export interface SimilarCoffeeList {
    count: number;
    items: SimilarCoffee;
};

export interface SimilarCoffee {
    rating_score: number;
    coffee:       Coffee;
    coffeeshop:   CoffeeShop;
    friends:      CoffeeFriendList;
};

