import { Component, OnInit } from '@angular/core';
import { Pizza } from 'src/app/common/pizza';
import { PizzaService } from 'src/app/services/pizza.service';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from 'src/app/common/cart-item';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {

  currentPizzaSizeId: number;
   pizzas: Pizza[];
   searchModule: boolean;

  constructor(private pizzaService: PizzaService,
    private activatedRoute: ActivatedRoute, private cartService: CartService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(()=>{
      this.listPizzas();
  })
  }

  listPizzas(){

    this.searchModule = this.activatedRoute.snapshot.paramMap.has('keyword');

    if (this.searchModule){
      this.handleSearchPizzas();
    }
    else{
      this.handleListProducts();
    }
  }

  handleSearchPizzas(){

    const theKeyword: string = this.activatedRoute.snapshot.paramMap.get('keyword');


    this.pizzaService.searchPizzas(theKeyword).subscribe(
      data => {
        this.pizzas = data;
      }
    )

  }

  handleListProducts(){

   const hasPizzaSizeId: boolean = this.activatedRoute.snapshot.paramMap.has('id');

   if(hasPizzaSizeId){
  
     this.currentPizzaSizeId = + this.activatedRoute.snapshot.paramMap.get('id');
   }else{

     this.currentPizzaSizeId = 1;
   }



   this.pizzaService.getPizzas(this.currentPizzaSizeId).subscribe(
     data => {this.pizzas = data;
    }
   )   
  }

  addToCart(thePizza: Pizza){
    console.log(`Adding to cart: ${thePizza.name}, ${thePizza.unitPrice}`);
    
    const theCartItem = new CartItem(thePizza);

    this.cartService.adToCart(theCartItem);
  }
}