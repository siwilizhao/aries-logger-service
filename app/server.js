/**
 * @author [siwilizhao]
 * @email [siwilizhao@mail.com]
 * @create date 2018-12-04 01:07:32
 * @modify date 2018-12-04 01:07:32
 * @desc [aries-logger-services]
 */
(async () => {
    const services = require('../index')
    const {
        SERVER_PORT,
        SERVER_HOST,
        LOG_LIST_QUEUE
    } = services.configs.logger
    const {
        REDIS_HOST,
        REDIS_PASSWORD,
        REDIS_PORT
    } = services.configs.redis
    const Server = require('aries-logger').server
    const options = {
        server_port: SERVER_PORT,
        server_host: SERVER_HOST,
        redis_port: REDIS_PORT,
        redis_host: REDIS_HOST,
        redis_password: REDIS_PASSWORD,
        log_list_queue: LOG_LIST_QUEUE
    }
    // 开启 服务
    new Server(options)
})()