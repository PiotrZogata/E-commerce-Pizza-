import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';


import { CheckoutComponent } from './checkout.component';


class RouterStub {
  navigate(){
    // navigate(params){
 }
}

describe('CheckoutComponent', () => {
  let component: CheckoutComponent;
  let fixture: ComponentFixture<CheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutComponent ],
      providers: [
        { provide: Router, useClass: RouterStub,
          CartService}
      ]
       ,
       imports: [ ReactiveFormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should redirect the user to the thankYouFshoppingComponent after clicking purchase button',()=>{
    let router = TestBed.get(Router);
    let spy = spyOn(router, 'navigate');
    //act
    component.onSubmit();
    //asserts
    expect(spy).toHaveBeenCalledWith(['thankYou']);
   })

 
  //  it('should navigate the user to the not found page, when an invalid user id is passed ',()=>{
  //   let router = TestBed.get(Router);
  //   let spy = spyOn(router, 'navigate');
  //   //act
  //   component.onSubmit();
  //   //asserts
  //   expect(spy).toHaveBeenCalledWith(['thankYou']);
  //  })

});
