import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { Subject, Observable } from 'rxjs';
import { WhitespaceValidation } from 'src/app/WhitespaceValidation'; //(!)



@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  checkoutFormGroup: FormGroup;

  // review your order

  totalPrice: number = 0.00;
  totalQuantity: number = 0;


  constructor(private formBuilder: FormBuilder, private router: Router, private cartService: CartService) {
  }

  ngOnInit(): void {

    //this.totalQuantity = this.cartService.totalQuantity.asObservable();
    //this.totalPrice = this.cartService.totalPrice.asObservable();
    //this.totalQuantity = this.cartService.totalQuantity.subscribe(data =>(this.totalQuantity = data));

    this.cartService.totalPrice.subscribe(
      data => (this.totalPrice = data)
    );

    this.cartService.totalQuantity.subscribe(
      data => this.totalQuantity = data
    )

    this.checkoutFormGroup = this.formBuilder.group({
      customer: this.formBuilder.group({
        //importuje validators
        // firstName: [''],
        // lastName: [''],
        // email: ['']
        'firstName': new FormControl('', [Validators.required, Validators.minLength(2), WhitespaceValidation.notOnlyWhitespace]
        ),
        'lastName': new FormControl('', [Validators.required, Validators.minLength(2), WhitespaceValidation.notOnlyWhitespace] //Validators.pattern("^[a-zA-Z]+$")
        ),
        'email': new FormControl('', [Validators.required,
           Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]
        )
      }),

      shippingAddress: this.formBuilder.group({
        'street': new FormControl('', [Validators.required, Validators.minLength(1)]
        ),
        'city': new FormControl('', [Validators.required, Validators.minLength(1)]
        ),
        'state': new FormControl('', [Validators.required, Validators.minLength(1)]
        ),
        'zipCode': new FormControl('', [Validators.required, Validators.minLength(1)]
        ),
      }),

      // billingAddress: this.formBuilder.group({
      //   street: [''],
      //   city: [''],
      //   state: [''],
      //   zipCode: ['']
      // }),

      creditCard: this.formBuilder.group({
        'cardType': new FormControl ('', [Validators.required, Validators.minLength(1)]
        ),
        // 'nameOnCard': new FormControl('', [Validators.required, Validators.minLength(2), WhitespaceValidation.notOnlyWhitespace]
        // ),
        'nameOnCard': ['', [Validators.required,Validators.minLength(1),Validators.pattern('^[A-Za-z][A-Za-z -]*$')]],
        // nameOnCard: ['', [Validators.required,Validators.minLength(1),Validators.pattern('^[A-Za-z][A-Za-z -]*$')]],
        'cardNumber': new FormControl ('', [Validators.required,Validators.minLength(16),Validators.min(1111111111111111),Validators.max(9999999999999999)]
        ),
        'cardCVVNumber':  new FormControl ('', [Validators.required,Validators.minLength(3),Validators.maxLength(3),Validators.min(111),Validators.max(999)]
        ),
        'expirationMonth': new FormControl('', [Validators.required,Validators.minLength(1),Validators.maxLength(2),Validators.min(1),Validators.max(12)]
        ),
        'expirationYear': new FormControl('', [Validators.required,Validators.minLength(4),Validators.maxLength(4),Validators.min(1111),Validators.max(9999)]
        )
      })
    });
    // nameOnCard: ['', [Validators.required,Validators.minLength(1),Validators.pattern('^[A-Za-z][A-Za-z -]*$')]],
    //   cardNumber: ['', [Validators.required,Validators.minLength(16),Validators.min(1111111111111111),Validators.max(9999999999999999)]],
    //   expirationMonth: ['', [Validators.required,Validators.minLength(1),Validators.maxLength(2),Validators.min(1),Validators.max(12)]],
    //   expirationYear: ['', [Validators.required,Validators.minLength(4),Validators.maxLength(4),Validators.min(1111),Validators.max(9999)]],
    //   cardCVVNumber: ['', [Validators.required,Validators.minLength(3),Validators.maxLength(3),Validators.min(111),Validators.max(999)]]

    
  }

  onSubmit() {
    console.log("Handling the submit button");
    console.log(this.checkoutFormGroup.get('customer').value);
    console.log("the email addres is " + this.checkoutFormGroup.get('customer').value.email);
   
    if (this.checkoutFormGroup.invalid) {
       this.checkoutFormGroup.markAllAsTouched();
       }
     
      // And in each submit handler you’ve called markAllAsTouched() to cover cases where users didn’t touch one of the fields:
     //Marks the control and all its descendant controls as touched.
      
      console.log("CheckoutFormGroup is valid: " + this.checkoutFormGroup.valid);
    this.router.navigateByUrl(`thankYou`);
  }



// copyShipingAddresToBillingAddress(event) {
//     if (event.target.checked) {
//       this.checkoutFormGroup.controls.billingAddres
//         .setValue(this.checkoutFormGroup.controls.shippingAddress.value);
//     } else {
//       this.checkoutFormGroup.controls.billingAddres.reset();
//     }
//   }

  // ngOnDestroy(): void {
  //   this.cartService.totalQuantity.unsubscribe();
  //   this.cartService.totalPrice.unsubscribe();
  // }



  get street(){
    return this.checkoutFormGroup.get('shippingAddress.street"');
  }

  get city(){
    return this.checkoutFormGroup.get('shippingAddress.city"');
  }

  get state(){
    return this.checkoutFormGroup.get('shippingAddress.state"');
  }

  get shippingAddressZipCode(){
    return this.checkoutFormGroup.get('shippingAddress.zipCode');
  }



  get cardType(){
    return this.checkoutFormGroup.get('creditCard.cardType');
  }

  get nameOnCard(){
    return this.checkoutFormGroup.get('creditCard.nameOnCard');
  }

  get cardNumber(){
    return this.checkoutFormGroup.get('creditCard.cardNumber');
  }

  get securityCode(){
    return this.checkoutFormGroup.get('creditCard.cardCVVNumber');
  }

  get expirationMonth(){
    return this.checkoutFormGroup.get('creditCard.expirationMonth');
  }

  get expirationYear(){
    return this.checkoutFormGroup.get('creditCard.expirationYear');
  }



  get firstName(){
    return this.checkoutFormGroup.get('customer.firstName');
  }

  get lastName(){
    return this.checkoutFormGroup.get('customer.lastName');
  }

  get email(){
    return this.checkoutFormGroup.get('customer.email');
  }
}
