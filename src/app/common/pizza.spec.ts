import { Pizza } from './pizza';

describe('Pizza', () => {
  let pizza: Pizza = null;//[{ id :1,
  
  beforeEach(() => {
    pizza = new Pizza();
    });

     it('should create an instance', () => {
    expect(new Pizza()).toBeTruthy();
  });

    it('should have a valid constructor', () => {
      expect(pizza).not.toBeNull();
      });

});