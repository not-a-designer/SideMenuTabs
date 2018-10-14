import { Coffeeshop } from '../interfaces/coffeeshop';
import { Coffeecard } from '../interfaces/coffeecard';


export class CoffeeUser {

    private _cards: Array<Coffeecard>;
    private _favorite: Coffeeshop;
    private _phone: string;
    private _username: string;

    constructor(public id: string, 
                public email: string) {
        this._favorite = null;
        this._cards = [];
        this._phone = '';
        this._username = '';
    }

    set favorite(shop: Coffeeshop) { this._favorite = shop }
    get favorite(): Coffeeshop     { return this._favorite }

    set phone(p: string) { this._phone = p }
    get phone(): string { return this._phone }

    set username(name: string) { this._username = name }
    get username(): string { return this._username }

    addCard(card: Coffeecard): Array<Coffeecard> { return [...this._cards, card] }

    removeCard(card: Coffeecard): Array<Coffeecard> { return this._cards.filter((c) => c.locationId !== card.locationId) }

    updateCard(card: Coffeecard): Array<Coffeecard> {
        return this._cards.map((c) => {
            return c.locationId === card.locationId ? card : c;
        });
    }
}