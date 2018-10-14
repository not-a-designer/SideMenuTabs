export interface Coffeeshop {
    address: string;
    coords: { 
      lat: number; 
      lng: number;
    };
    locationId: string,
    name: string;
    phone: string;
    placeId: string;
    
    photoUrl?: string;
  };