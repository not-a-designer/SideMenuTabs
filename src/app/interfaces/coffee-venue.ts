import { Coffee }                    from '@app-interfaces/coffee';
import { CoffeeShop }                from '@app-interfaces/coffee-shop';
import { CoffeeFriendList, CoffeeMedia } from '@app-interfaces/shared/shared.interface';


/** exported interface **/
export interface CoffeeVenue {
    venue_id:         number;
    venue_name:       string;
    last_updated:     string;
    primary_category: string;
    categories:       VenueCategories;
    stats:            VenueStats;
    venue_icon:       VenueIcon;
    public_venue:     false,
    location:         VenueLocation;
    contact:          VenueContact;
    foursquare:       VenueFoursquare;
    media:            CoffeeMedia;
    top_coffees:      TopCoffee;
};





/** private interfaces **/
interface VenueCategories {
    count: number;
    items: Array<VenueCategory>;
};


interface VenueCategory {
    category_name: string;
    category_id:   string;
    is_primary:    boolean;
};


interface VenueStats {
    total_count:      number;
    user_count:       number;
    total_user_count: number;
    monthly_count:    number;
    weekly_count:     number;
};


interface VenueIcon {
    sm: string;
    md: string;
    lg: string;
};


interface VenueLocation {
    venue_address: string;
    venue_city:    string;
    venue_state:   string;
    venue_country: string;
    lat:           number;
    lng:           number;
};


interface VenueContact {
    twitter:   string;
    venue_url: string;
};


interface VenueFoursquare {
    foursquare_id:  string;
    foursquare_url: string;
};


interface TopCoffee {
    offset: number;
    limit:  number;
    count:  number;
    items:  TopCoffeeItem;
};


interface TopCoffeeItem {
    created_at:  string;
    total_count: number;
    your_count:  number;
    coffee:      Coffee;
    roaster:     CoffeeShop;
    friends:     CoffeeFriendList;
};