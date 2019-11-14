# Pay-Go

# Introduction

`pay-go` is a NodeJs API wrapper for `busha pay` service. check docs here [https://docs.api.pay.busha.co](https://docs.api.pay.busha.co)

```go
const pay = require("") // TODO pass correct value

const obj = pay.newClient("DEV_VZJjh28yYnGB")

obj.request.baseURL = 'api.staging.pay.busha.co'

obj.charge.list(1, 10)
    .then(console.log)
    .catch(e => console.error(e.message))
obj.charge.get('f2278893-defd-4396-8c76-f954f0642abd')
    .then(console.log)
    .catch(e => console.error(e.message))
obj.charge.create({
        "local_price": {
            "amount": "2000",
            "currency": "NGN"
        },
        "redirect_url": "https://example.com",
        "cancel_url": "https://example.com",
        "metadata": {
            "customer_id": "id_1005",
            "customer_name": "John Doe"
        }
    })
    .then(console.log)
    .catch(e => console.error(e.message))
obj.charge.cancel('f2278893-defd-4396-8c76-f954f0642abd')
    .then(console.log)
    .catch(e => console.error(e.message))

```
