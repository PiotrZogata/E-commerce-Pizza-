import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CartItem } from 'src/app/common/cart-item';
import { CartService } from 'src/app/services/cart.service';

import { CartDetailsComponent } from './cart-details.component';

describe('CartDetailsComponent', () => {
  let component: CartDetailsComponent;
  let fixture: ComponentFixture<CartDetailsComponent>;
  let service : CartService;
  let cartItem :CartItem = {
    id: 1,
    name: 'carbonara',
    imageUrl: 'nnnnnn',
    unitPrice: 24,
    quantity: 2
    };
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartDetailsComponent ],
      providers: [ CartService ] 
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartDetailsComponent);
    component = fixture.componentInstance;
   // fixture.detectChanges();
  });

  // it('should increment totalQuantity when cliked in button +', () => {
  //   let button=fixture.debugElement.query(By.css('fas fa-plus'));
  //   component.incrementQuantity(cartItem);
  //   expect(component.cartItems.indexOf(cartItem)).toBeGreaterThan(-1);
  // })

//it('should increment totalQuantity when cliked in +', () => {
  //it('should increment totalVotes when upvoted', () => {
  // Arrange
  //let component = new VoteComponent(); //initialization
  //AcT
  //component.upVote();
  //Asserts
  //expect(component.totalVotes).toBe(1);
//});
// incrementQuantity(theCartItem: CartItem) {
//   this.cartService.adToCart(theCartItem);
// }
  
});

