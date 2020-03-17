const req = require('./req')
const charge = require('./charge')

module.exports = {
    newClient
}

/**
 * @description creates a new busha pay client
 * @param {string} key business api key
 */
function newClient(key) {
    const request = req(key)
    return {
        request,
        charge: charge(request)
    }
}