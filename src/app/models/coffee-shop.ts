import { CoffeeShop } from '@app-interfaces/coffee-shop';

declare const google: any;


export class Coffeeshop {

    _shop: CoffeeShop;
    
    constructor(place: google.maps.places.PlaceResult) {
        let { coffeeshop_id, coffeeshop_name, coffeeshop_slug,
              coffeeshop_label, country_name, coffeeshop_in_production,
              is_independent, claimed_status, coffee_count,
              contact, coffeeshop_type, coffeeshop_type_id,
              location, coffee_rating, coffeeshop_description, stats,
              owners, media, coffee_list } = this._shop;

        let { address_components, formatted_address, formatted_phone_number,
              geometry, icon, id, 
              name, permanently_closed, photos, 
              place_id, rating, types } = place;

        const coffeeSlug: string = name.toLowerCase().replace(' ', '-');
        const countryName: Array<string> = address_components
            .filter((comp) => comp.types.indexOf('country') > -1)
            .map((cmp) => cmp.long_name);
       /* const cityName: Array<string> = address_components
            .filter((comp) => ).map((cmp) => )*/



        coffeeshop_id = place_id;
        coffeeshop_name = name;
        coffeeshop_slug = coffeeSlug;
        coffeeshop_label = '';
        country_name = address_components[6].long_name;
        coffeeshop_in_production = permanently_closed;
        is_independent: false;
        claimedStatus: { };
        coffee_count = 0;
        contact = { twitter: '', instagram: '', facebook: '', url: '' };
        coffeeshop_type = '';
        coffeeshop_type_id = 0;
        /*location = {
            coffeeshop_address: formatted_address,
            coffeeshop_city: cityName,
            coffeeshop_state: stateName,

        coffee_rating = rating;
        coffeeshop_description
        stats
        owners
        media
        coffee_list*/
    }
}