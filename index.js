const req = require('./req')
const charge = require('./charge')

module.exports = {
    newClient
}

function newClient(key) {
    const request = req(key)
    return {
        request,
        charge: charge(request)
    }
}