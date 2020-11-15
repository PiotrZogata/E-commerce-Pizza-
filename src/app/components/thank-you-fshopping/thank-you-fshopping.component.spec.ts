import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankYouFShoppingComponent } from './thank-you-fshopping.component';

describe('ThankYouFShoppingComponent', () => {
  let component: ThankYouFShoppingComponent;
  let fixture: ComponentFixture<ThankYouFShoppingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThankYouFShoppingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThankYouFShoppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
