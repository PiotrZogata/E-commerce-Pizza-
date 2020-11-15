import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pizza } from '../common/pizza';
import { PizzaSize } from '../common/pizza-size';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  private baseUrl = "http://localhost:8080/api/pizzas"
  private pizzaSizeUrl = "http://localhost:8080/api/sizeOfPizzas";

  constructor(private httpClient: HttpClient) { }


  getPizzas(thePizzaSizeId: number): Observable<Pizza[]>{
    const searchUrl = `${this.baseUrl}/search/pizza_size_id?id=${thePizzaSizeId}`;
    
    return this.getPizza(searchUrl);
  }

  //findByPizzaSizeId": {"href": "http://localhost:8080/api/pizzas/search/findByPizzaSizeId{?id,page,size,sort}

  getPizzaSizes(): Observable<PizzaSize[]>{
    return this.httpClient.get<GetResponsePizzaSize>(this.pizzaSizeUrl).pipe(
      map(response => response._embedded.sizeOfPizzas)
    );
  }

  searchPizzas(theKeyword: string): Observable <Pizza[]> {

    const searchUrl = `${this.baseUrl}/search/findByNameContaining?name=${theKeyword}`;

    return this.getPizza(searchUrl);
  }


  private getPizza(searchUrl: string): Observable<Pizza[]> {
    return this.httpClient.get<GetResponsePizzas>(searchUrl).pipe(
      map(response => response._embedded.pizzas)
    );
  }

  getPizzaDetails(thePizzaId: number): Observable<Pizza>{

    const pizzaUrl = `${this.baseUrl}/${thePizzaId}`
    
    return this.httpClient.get<Pizza>(pizzaUrl);
  }
}

interface GetResponsePizzas{
  _embedded: {
    pizzas: Pizza[];
  }
}

interface GetResponsePizzaSize{
  _embedded: {
    sizeOfPizzas: PizzaSize[];
  }
}