/**
 * @author [siwilizhao]
 * @email [siwilizhao@mail.com]
 * @create date 2018-12-04 01:53:17
 * @modify date 2018-12-04 01:53:17
 * @desc [base Services]
*/
const configs = require('./configs')
class Services {
    constructor() {
        this.configs = configs
    }
}
module.exports = new Services()