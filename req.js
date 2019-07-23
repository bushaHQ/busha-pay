const {
    request
} = require('https')

const baseURL = 'api.pay.busha.co'

/**
 * @description helps make http request easier for this lib
 * @param {string} method http method
 * @param {string} path request path
 * @param {Object} body request body
 */
async function call(method, path, body = {}) {
    const key = this.key
    const option = {
        hostname: this.baseURL,
        path,
        method,
        headers: {
            "Content-Type": "application/json",
            "X-BP-Api-Key": key,
        }
    }

    return new Promise((r, x) => {
        const req = request(option, (res) => {
            let body = ''
            res.on('data', chunk => {
                body += chunk
            })

            res.on('end', () => {
                try {
                    const resBody = JSON.parse(body)
                    if (res.statusCode != 200) {
                        x(resBody.error)
                        return
                    }
                    r(resBody)
                } catch (e) {
                    x(e)
                }
            })

            res.on('error', e => x(e))
        })
        try {
            const reqBody = JSON.stringify(body)
            req.write(reqBody)
            req.end()
        } catch (e) {
            x(e)
        }

        req.on('error', e => {
            x(e)
        })
    })
}


module.exports = (key) => {
    return {
        baseURL,
        call,
        key
    }
}