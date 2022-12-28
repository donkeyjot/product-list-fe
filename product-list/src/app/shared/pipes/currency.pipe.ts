import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "customCurrency" })
export class CustomCurrencyPipe implements PipeTransform {
  constructor() {
  }

  transform(value: number): number | string {
    if (value) {
      return new Intl.NumberFormat("cs-CZ", {
        style: "currency",
        currency: "CZK",
        currencyDisplay: "code",
        minimumFractionDigits: 2
      }).format(Number(value));
    } else return "FREE";
  }
}
