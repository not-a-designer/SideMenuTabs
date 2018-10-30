import { Coffeeshop }  from '@app-interfaces/coffeeshop';
import { Coffee }      from '@app-interfaces/coffee';
import { CoffeeMedia } from '@app-interfaces/shared/shared.interface';


/**  **/
export interface User {
    uid:              string;
    id:               string;
    username:         string;
    first_name:       string;
    last_name:        string;
    user_avatar:      string;
    user_avatar_hd:   string;
    user_cover_photo: string;
    is_private:       boolean;
    location:         string;
    url:              string;
    bio:              string;
    is_supporter;     boolean;
    relationship:     string;
    coffee_url:       string;
    account_type:     string;
    stats:            UserStats;
    recent_coffees:   RecentCoffeeList;
    media:            CoffeeMedia;
    contact:          UserContact;
    date_joined:      string;
    settings:         UserSettings;
};






/** private interfaces **/
interface UserStats {
    total_badges: number;
    total_friends: number;
    total_checkins: number;
    total_coffees: number;
    total_created_coffees: number;
    total_followings: number;
    total_photos: number;
};

interface UserContact {
    foursquare: number;
    twitter:    string;
    facebook:   string;
};

interface RecentCoffeeList {
    count: number;
    items: Array<{coffee: Coffee, coffeeshop: Coffeeshop}>;
};

interface RecentCoffee {

};

interface UserSettings {
    badge:         UserBadgeSettings;
    checkin:       UserCheckinSetttings;
    navigation:    UserNavigationSettings;
    email_address: string;
};

interface UserBadgeSettings {
    badges_to_facebook: boolean;
    badges_to_twitter:  boolean;
}

interface UserCheckinSetttings {
    checkin_to_facebook:   boolean;
    checkin_to_twitter:    boolean;
    checkin_to_foursquare: boolean;
}

interface UserNavigationSettings {
    default_to_checkin: boolean;
}