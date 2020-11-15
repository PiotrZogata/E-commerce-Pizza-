import { Component, OnInit } from '@angular/core';
import { PizzaSize } from 'src/app/common/pizza-size';
import { PizzaService } from 'src/app/services/pizza.service';

@Component({
  selector: 'app-pizza-size',
  templateUrl: './pizza-size.component.html',
  styleUrls: ['./pizza-size.component.css']
})
export class PizzaSizeComponent implements OnInit {

  pizzaSizes: PizzaSize[];

  constructor(private pizzaService: PizzaService) { }

  ngOnInit() {
    this.listPizzaSizes();
  }

  listPizzaSizes(){
    this.pizzaService.getPizzaSizes().subscribe(
      data => this.pizzaSizes = data
    );
  }

}
