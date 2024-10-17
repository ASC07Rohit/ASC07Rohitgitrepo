
export interface Product{
    id:number;
    name: string;
    price: number;
    rating: number;
    reviewsCount: number;
    brand: string;
    availability: string;
    // ? makes the property optional
    color?: string;
    storage?: string;
    // The releaseDate property is mandated
    releaseDate: string;
}