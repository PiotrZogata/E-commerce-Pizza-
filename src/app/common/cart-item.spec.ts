import { CartItem } from './cart-item';
import  { Pizza } from './pizza';

describe('CartItem class tests', () => {
   let cartItem: CartItem;
  
  
         beforeEach(() => {
      let pizza = new Pizza();
      let cartItem = new CartItem(pizza);
       });
       
       it('should have a valid constructor', () => {
           expect(cartItem).not.toBeNull();
           });
       
           afterEach(() => {
       cartItem = null;
       });
      });;