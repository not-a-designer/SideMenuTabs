import { User } from '@app-interfaces/coffee-user'


export interface CoffeeFriendList {
    count: number;
    items: Array<CoffeeFriend>;
}


interface CoffeeFriend {
    friendship_hash: string;
    created_at:      string;
    user:            User;
    mutual_friends:  CoffeeFriendList;
}