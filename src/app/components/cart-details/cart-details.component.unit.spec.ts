import { CartDetailsComponent } from "./cart-details.component";
import { CartItem } from 'src/app/common/cart-item';



describe('unit CartDetailsComponent tests', () => {


    let cartDetails: CartDetailsComponent = null;

    beforeEach(() => {

            cartDetails = new CartDetailsComponent(null);
        
    });

    it('should set instance correctly', () => {
        expect(cartDetails).not.toBeNull();
    });

    it('should be no pizza if there is no data', () => {
        expect(cartDetails.cartItems.length).toBe(0);
    });

    it('should be pizza if there is data', () => {
        const newCart: CartItem = {
            id: 1,
            name: 'Carbonara',
            imageUrl: 'picture',
            unitPrice: 24,
            quantity: 1
        };

        const cartItems: Array<CartItem> = [newCart];
        cartDetails.cartItems = cartItems;

        expect(cartDetails.cartItems.length).toBe(1);
    });
});
