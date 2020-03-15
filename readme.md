# @bushaHQ/busha-pay

## Introduction

`@bushaHQ/busha-pay` is an API client for `busha pay` service. Check the docs here [https://docs.api.pay.busha.co](https://docs.api.pay.busha.co).
Busha Pay allows businesses collect cryptocurrencies such as Bitcoin, Ethereum etc. as payment from customers around the world.

[![npm version](https://badge.fury.io/js/%40busha%2Fbusha-pay.svg)](https://badge.fury.io/js/%40busha%2Fbusha-pay)

## Usage

```js
const bushapay = require("@bushaHQ/busha-pay");

const bushapayClient = bushapay.newClient("<YOUR_API_KEY>");

// get list of charge transactions
const page = 1;
const limit = 10;
bushapayClient.charge
  .list(page, limit)
  .then(console.log)
  .catch(e => console.error(e.message));

// get details for a particular charge transaction
bushapayClient.charge
  .get("<CHARGE_ID>")
  .then(console.log)
  .catch(e => console.error(e.message));

// create a charge transaction
bushapayClient.charge
  .create({
    local_price: {
      amount: "2000",
      currency: "NGN"
    },
    redirect_url: "https://example.com",
    cancel_url: "https://example.com",
    metadata: {
      customer_id: "<UNIQUE_CUSTOMER_ID>",
      customer_name: "John Doe"
    }
  })
  .then(console.log)
  .catch(e => console.error(e.message));

// cancel a charge transaction
bushapayClient.charge
  .cancel("<CHARGE_ID>")
  .then(console.log)
  .catch(e => console.error(e.message));
```
