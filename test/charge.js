const expect = require("chai").expect;
const pay = require("../index");
const dotenv = require("dotenv");
dotenv.config();

const { PAY_TEST_KEY } = process.env;
const obj = pay.newClient(PAY_TEST_KEY);
let chargeID;

obj.request.baseURL = "api.staging.pay.busha.co";

describe("Charge tests", async function() {
  this.timeout(0);
  it("It should create a charge", async () => {
    return obj.charge
      .create({
        local_price: {
          amount: "2000",
          currency: "NGN"
        },
        redirect_url: "https://example.com",
        cancel_url: "https://example.com",
        metadata: {
          customer_id: "id_1005",
          customer_name: "John Doe"
        }
      })
      .then(c => {
        chargeID = c.id;
      });
  });

  it("Should return a list of charges", async () => {
    return obj.charge
      .list(1, 10)
      .then(r => {
        expect(r).to.be.an("Array");
      })
      .catch(e => {
        throw e;
      });
  });

  it("Should return details of a charge", async () => {
    return obj.charge
      .get(chargeID)
      .then(r => {
        expect(r).to.be.an("Object");
      })
      .catch(e => {
        throw e;
      });
  });
  it("Should cancel charge", async () => {
    return obj.charge
      .cancel(chargeID)
      .then(r => {
        expect(r).to.be.an("Object");
      })
      .catch(e => {
        throw e;
      });
  });
});
