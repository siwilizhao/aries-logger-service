/**
 * @author [siwilizhao]
 * @email [siwilizhao@mail.com]
 * @create date 2018-12-04 20:57:18
 * @modify date 2018-12-04 20:57:18
 * @desc [redis connect]
*/
const {
    REDIS_HOST,
    REDIS_PASSWORD,
    REDIS_PORT
} = require('../../configs/redis')
const Redis = require('ioredis')
module.exports = new Redis({
    port: REDIS_PORT,
    host: REDIS_HOST,
    password: REDIS_PASSWORD
})