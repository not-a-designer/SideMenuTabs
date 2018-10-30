import { Coffee }                        from '@app-interfaces/coffee';
import { CoffeeMedia, CoffeeFriendList } from '@app-interfaces/shared/shared.interface';


/** exported interface **/
export interface CoffeeShop {
    coffeeshop_id:            string;
    coffeeshop_name:          string;
    coffeeshop_slug:          string;
    coffeeshop_label:         string;
    country_name:             string;
    coffeeshop_in_production: boolean;
    is_independent:           boolean;
    claimed_status:           CoffeeClaimStatus;
    coffee_count:             number;
    contact:                  CoffeeshopContact;
    coffeeshop_type:          string;
    coffeeshop_type_id:       number;
    location:                 CoffeeshopLocation;
    coffee_rating:            CoffeeshopRating;
    coffeeshop_description:   string;
    stats:                    CoffeeshopStats;
    owners:                   CoffeeshopOwners;
    media:                    CoffeeMedia;
    coffee_list:              CoffeeList;
};



/** private interfaces **/
interface CoffeeClaimStatus {
    is_claimed:     boolean;
    claimed_slug:   string;
    follow_status:  boolean;
    follower_count: number;
    uid:            number;
    mute_status:    string;
};

interface CoffeeshopContact {
    twitter:   string;
    facebook:  string;
    instagram: string;
    url:       string;
};

interface CoffeeshopLocation {
    coffeeshop_address: string;
    coffeeshop_city:    string;
    coffeeshop_state:   string;
    coffeeshop_lat:     number;
    coffeeshop_lng:     number;
};

interface CoffeeshopRating {
    count:        number;
    rating_score: number;
};

interface CoffeeshopStats {
    total_count:    number;
    unique_count:   number;
    monthly_count:  number;
    weekly_count:   number;
    user_count:     number;
    age_on_service: number;
};

interface CoffeeshopOwners {
    count: number;
    item:  Array<any>;
};

interface CoffeeList {
    is_super:     boolean;
    sort:         string;
    filter:       string;
    count:        number;
    items:        CoffeeListItem;
    coffee_count: number;
};

interface CoffeeListItem {
    has_had:     boolean;
    total_count: number;
    coffee:      Coffee;
    coffeeshop:  CoffeeShop;
    friends:     Array<CoffeeFriendList>
};


