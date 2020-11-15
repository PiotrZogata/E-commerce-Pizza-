import { PizzaDetailsComponent } from "./components/pizza-details/pizza-details.component"
import { routes } from './app-routing.module';
import { PizzaListComponent } from './components/pizza-list/pizza-list.component';
import { ThankYouFShoppingComponent } from './components/thank-you-fshopping/thank-you-fshopping.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

describe('routes', () => {
    it('should contain a route for PizzaDetailsComponent', () => {
        expect(routes).toContain({path: 'pizzas/:id', component: PizzaDetailsComponent})
    });

    it('should contain a route for PizzaDetailsComponent', () => {
        expect(routes).toContain({path: 'pizzas', component: PizzaListComponent})
    })

    it('should contain a route for PizzaDetailsComponent', () => {
        expect(routes).toContain({path: 'thankYou', component: ThankYouFShoppingComponent})
    })

    it('should contain a route for PizzaDetailsComponent', () => {
        expect(routes).toContain({path: '**', component: PageNotFoundComponent})
    })

})