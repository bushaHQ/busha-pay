async function create(charge) {
    return this.req.call("POST", `/charges`, charge)
}
async function list(page, limit) {
    return this.req.call("GET", `/charges?page=${page}&limit=${limit}`)
}
async function get(id) {
    return this.req.call("GET", `/charges/${id}`)
}

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