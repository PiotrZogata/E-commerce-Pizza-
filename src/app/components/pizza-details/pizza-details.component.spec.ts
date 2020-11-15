import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PizzaService } from 'src/app/services/pizza.service';

import { PizzaDetailsComponent } from './pizza-details.component';

describe('PizzaDetailsComponent', () => {
  let component: PizzaDetailsComponent;
  let fixture: ComponentFixture<PizzaDetailsComponent>;
 

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaDetailsComponent ],
      imports: [ ],
      providers: [{provide: PizzaService, useClass: PizzaServiceStub}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaDetailsComponent);
    component = fixture.componentInstance;
   // fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});

class PizzaServiceStub{

}
