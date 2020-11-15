import { Pizza } from './pizza';

export class CartItem {
    id:number;
    name: string;
    imageUrl: string;
    unitPrice: number;

    quantity: number;

    constructor(pizza: Pizza) {
        this.id = pizza.id;
        this.name = pizza.name;
        this.imageUrl = pizza.imageUrl;
        this.unitPrice = pizza.unitPrice;

        this.quantity = 1;
    }
}
