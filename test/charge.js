const expect = require('chai').expect
const pay = require("../index")

const obj = pay.newClient(process.env.PAY_TEST_KEY)
let chargeID;

obj.request.baseURL = 'api.staging.pay.busha.co'

describe("Test charge", async function () {
    this.timeout(0)
    before(async () => {
        console.log("hello")
        return obj.charge.create({
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
            .then(c => {
                chargeID = c.id

            })

    });

    it("Should return a list of charges", async () => {
        return obj.charge.list(1, 10)
            .then(r => {
                expect(r).to.be.an("Array")
            })
            .catch(e => {
                throw e
            })
    })

    it("Should return a get of charge", async () => {
        return obj.charge.get(chargeID)
            .then(r => {
                expect(r).to.be.an("Object")
            })
            .catch(e => {
                throw e
            })
    })
    it("Should cancel  charge", async () => {
        return obj.charge.cancel(chargeID)
            .then(r => {
                expect(r).to.be.an("Object")
            })
            .catch(e => {
                throw e
            })
    })
})