# FreeCurrencyRate

FreeCurrencyRate is a JavaScript library that provides free currency conversion.

## Installation

You can install FreeCurrencyRate using [npm](https://npmjs.com/) by running the following command:

```bash
npm install freecurrencyrate
```

## Usage

First, import the `freecurrencyrate` module:

```javascript
const c = require("freecurrencyrate");
```

To convert a currency, call the `c` function with the base currency, target currency, and amount as arguments. The function takes a callback as its fourth argument, which will be called with the result of the conversion:

```javascript
c(base, target, amount, result => {
    console.log(result);
});
```

For example, to convert 100 Indonesian Rupiah (IDR) to United States Dollars (USD), you can use the following code:

```javascript
c('idr', 'usd', 100, result => {
    console.log(result);
});
```

## Contributing

Contributions to FreeCurrencyRate are welcome! If you would like to make a major change, please open an issue first to discuss your proposed changes. When submitting a pull request, please make sure to update any relevant tests.

Thank you for considering contributing to FreeCurrencyRate! 😊
```
