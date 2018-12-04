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
        LOG_LIST_QUEUE
    } = services.configs.logger
    const wait = require('siwi-wait')

    // REDIS
    const redis = require('./libs/redis')
    // MONGODB
    const mongo = require('./libs/mongodb')
    mongo.on('error', console.error.bind(console, 'connection error:'))
    mongo.once('open', () => {
        console.log('mongodb is open')
    })

    const Logs_Model = require('./mongooses/logs')

    while (true) {
        const log = await redis.rpop(LOG_LIST_QUEUE)
        if (!log) {
            console.log('no log to process')
            await wait(5000)
        }
        try {
            const logObj = JSON.parse(log)
            await Logs_Model.create(logObj)
        } catch (error) {
            console.trace(error)
        }
    }
})()