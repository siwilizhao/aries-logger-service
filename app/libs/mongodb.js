/**
 * @author [siwilizhao]
 * @email [siwilizhao@mail.com]
 * @create date 2018-12-04 20:59:20
 * @modify date 2018-12-04 20:59:20
 * @desc [mongo connect]
*/
const {
    MONGODB_PORT,
    MONGODB_HOST,
    MONGODB_DATABASE
} = require('../../configs/mongodb')

const HOST = `mongodb://${MONGODB_HOST}:${MONGODB_PORT}/${MONGODB_DATABASE}`
const mongoose = require('mongoose')

mongoose.connect(
    HOST,
    {
        useNewUrlParser: true
    }
)
const mongo = mongoose.connection
module.exports = mongo
