/**
 * @description create a new charge
 * @param {Object} charge charge request body
 */
async function create(charge) {
    return this.req.call("POST", `/charges`, charge)
}

/**
 * @description get alist of charges
 * @param {number} page page of the paginator
 * @param {number} limit number of charges to return 
 */
async function list(page, limit) {
    return this.req.call("GET", `/charges?page=${page}&limit=${limit}`)
}

/**
 * @description get a single charge 
 * @param {string} id id of the charge
 */
async function get(id) {
    return this.req.call("GET", `/charges/${id}`)
}

/**
 * @description cancel an existing 
 * @param {string} id id of the charge
 */
async function cancel(id) {
    return this.req.call("POST", `/charges/${id}/cancel`)
}

module.exports = (req) => {
    return {
        req,
        list,
        get,
        create,
        cancel
    }
}