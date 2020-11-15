import { Component, OnInit } from '@angular/core';
import { Pizza } from 'src/app/common/pizza';
import { PizzaService } from 'src/app/services/pizza.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/common/cart-item';

@Component({
  selector: 'app-pizza-details',
  templateUrl: './pizza-details.component.html',
  styleUrls: ['./pizza-details.component.css']
})
export class PizzaDetailsComponent implements OnInit {

  pizza: Pizza= new Pizza();
  
  
  constructor(private pizzaService: PizzaService, 
    private route: ActivatedRoute, private cartService: CartService) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe(()=> {
      this.handleProductDetails();
    })
  }

  handleProductDetails() {

   const thePizzaId: number = + this.route.snapshot.paramMap.get('id');

   this.pizzaService.getPizzaDetails(thePizzaId).subscribe(
     data => {
       this.pizza = data;
     }
   )

  }

  addToCart(){
    console.log(`Adding to cart: ${this.pizza.name}, ${this.pizza.unitPrice} `);
    const theCartItem = new CartItem(this.pizza);
        this.cartService.adToCart(theCartItem);
  }

}