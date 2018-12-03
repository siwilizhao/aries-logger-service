/**
 * @author [siwilizhao]
 * @email [siwilizhao@mail.com]
 * @create date 2018-12-04 01:32:07
 * @modify date 2018-12-04 01:32:07
 * @desc [日志消化]
 */
(async () => {
    const services = require('../index')
    const {
        MONGODB_PORT,
        MONGODB_HOST,
        MONGODB_DATABASE
    } = services.configs.mongodb
    const {
        REDIS_HOST,
        REDIS_PASSWORD,
        REDIS_PORT
    } = services.configs.redis
    const {
        LOG_LIST_QUEUE
    } = services.configs.logger
    const wait = require('siwi-wait')

    // REDIS
    const Redis = require('ioredis')
    const redis = new Redis({
        port: REDIS_PORT,
        host: REDIS_HOST,
        password: REDIS_PASSWORD
    })

    // MONGODB
    const mongoose = require('mongoose')
    mongoose.connect(`mongodb://${MONGODB_HOST}:${MONGODB_PORT}/${MONGODB_DATABASE}`, {
        useNewUrlParser: true
    })

    const Logs_Model = require('./mongooses/logs')

    while (true) {
        const log = await redis.rpop(LOG_LIST_QUEUE)
        if (!log) {
            console.log('no log to process')
            await wait(5000)
        }
        const logObj = JSON.parse(log)
        await Logs_Model.create(logObj)
    }
})()