import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PizzaService } from './services/pizza.service';
import { CartStatusComponent } from './components/cart-status/cart-status.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PizzaDetailsComponent } from './components/pizza-details/pizza-details.component';
import { PizzaListComponent } from './components/pizza-list/pizza-list.component';
import { PizzaSizeComponent } from './components/pizza-size/pizza-size.component';
import { SearchComponent } from './components/search/search.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './components/contact/contact.component';
import { CartService } from './services/cart.service';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ThankYouFShoppingComponent } from './components/thank-you-fshopping/thank-you-fshopping.component';


@NgModule({
  declarations: [
    AppComponent,
    CartStatusComponent,
    PageNotFoundComponent,
    PizzaDetailsComponent,
    PizzaListComponent,
    PizzaSizeComponent,
    SearchComponent,
    CartDetailsComponent,
    ContactComponent,
    CheckoutComponent,
    ThankYouFShoppingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    PizzaService,
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
