// // import Pricing from './4-pricing.js';
import Currency from './3-currency';

// class Pricing {
//   constructor(amount, currency){
//     this._amount = amount;
//     this._currency = currency;
//   }

//   get amount(){
//     return this._amount;
//   }

//   get currency(){
//     return this._currency;
//   }

//   set amount(newAmount){
//     this._amount = newAmount;
//   }

//   set currency(newCurrency){
//     this._currency = newCurrency;
//   }

//   displayFullPrice(){
//     return `${this._amount} ${Object.keys((this._currency))}`
//   }
// }

// /**** */
// // import Currency from './3-currency.js';

// const p = new Pricing(100, new Currency("EUR", "Euro"))
// console.log(p);
// console.log(p.displayFullPrice());
// // console.log(p._currency)

let xx = new Currency("EUR", "Euro")

class fine extends Currency {
  constructor(xx){
    super(xx)
    this.yy = xx;
  }
}

let x2 = new fine(xx)
console.log(x2)
// console.log(xx._code, xx._name)
// console.log(xx.displayFullCurrency())