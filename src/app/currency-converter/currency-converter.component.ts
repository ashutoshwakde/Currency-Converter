// import { Component, OnInit } from '@angular/core';
// import { CurrencyService } from '../Service/currency.service';

// @Component({
//   selector: 'app-currency-converter',
//   templateUrl: './currency-converter.component.html',
//   styleUrls: ['./currency-converter.component.css']
// })
// export class CurrencyConverterComponent implements OnInit {

//   fromCurrency: string = 'USD';
//   toCurrency: string = 'EUR';
//   amount: number = 1;
//   convertedAmount: number | null = null;

//   constructor(private currencyService: CurrencyService) { }

//   ngOnInit(): void {
//   }

//   convertCurrency() {
//     this.currencyService.getRates(this.fromCurrency).subscribe(data => {
//       const rate = data.conversion_rates[this.toCurrency];
//       this.convertedAmount = this.amount * rate;
//     });
//   }

// }




import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../Service/currency.service';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css']
})
export class CurrencyConverterComponent implements OnInit {
  fromCurrency: string = '';
  toCurrency: string = '';
  amount: number = 1;
  convertedAmount: number | null = null;
  currencies: string[] = []; // List of currencies

  constructor(private currencyService: CurrencyService) { }

  ngOnInit(): void {
    this.currencyService.getRates('USD').subscribe(data => {
      this.currencies = Object.keys(data.conversion_rates);
    });
  }

  convertCurrency() {
    this.currencyService.getRates(this.fromCurrency).subscribe(data => {
      const rate = data.conversion_rates[this.toCurrency];
      this.convertedAmount = this.amount * rate;
    });
  }

  switchCurrency() {
    const temp = this.fromCurrency;
    this.fromCurrency = this.toCurrency;
    this.toCurrency = temp;
  }
}

