import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PizzaDetailsComponent } from './components/pizza-details/pizza-details.component';
import { PizzaListComponent } from './components/pizza-list/pizza-list.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { ContactComponent } from './components/contact/contact.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PizzaSizeComponent } from './components/pizza-size/pizza-size.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ThankYouFShoppingComponent } from './components/thank-you-fshopping/thank-you-fshopping.component';

export const routes: Routes = [
  {path: 'pizzas/:id', component: PizzaDetailsComponent},
  {path: 'search/:keyword', component: PizzaListComponent},
  {path: 'pizzas', component: PizzaListComponent},
  {path: 'pizzaSizeId/:id', component: PizzaListComponent},
  {path: 'cart-details', component: CartDetailsComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'thankYou', component: ThankYouFShoppingComponent},
  {path: '', redirectTo: '/pizzas', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
