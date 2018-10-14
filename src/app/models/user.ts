import { Coffeeshop } from '@app-interfaces/coffeeshop';
import { Coffeecard } from '@app-interfaces/coffeecard';


export class User {

    private _birthdate: string;
    private _cards: Array<Coffeecard>;
    private _displayName: string;
    private _favorite: Coffeeshop;
    private _firstName: string;
    private _lastName: string;
    private _phone: string;

    constructor(public email: string,
                public isAdmin: boolean,
                public uid: string) {}

    set birthdate(birthdate: string) { this._birthdate = birthdate }
    get birthdate() { return this._birthdate }

    public initCards(): void { this._cards = [] }
    public addCard(card: Coffeecard): Array<Coffeecard> { return [...this._cards, card] }
    public removeCard(card: Coffeecard): Array<Coffeecard> { return this._cards.filter((c) => c.cardNumber !== card.cardNumber) }
    get cards(): Array<Coffeecard> { return this._cards.slice() }

    set displayName(name: string) { this._displayName = name }
    get displayName() { return this._displayName }

    set favorite(coffeeshop: Coffeeshop) { this._favorite = coffeeshop }
    get favorite(): Coffeeshop { return this._favorite }

    set firstName(name: string) { this._firstName = name }
    get firstName() { return this._firstName }

    set lastName(name: string) { this._lastName = name }
    get lastName() { return this._lastName }

    set phone(p: string) { this._phone = p }
    get phone(): string { return this._phone }
}