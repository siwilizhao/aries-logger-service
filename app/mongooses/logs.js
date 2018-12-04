const mongoose = require('mongoose')
const Schema = mongoose.Schema

// define model
const Table = new Schema({
    source: {
        type: String,
    },
    "contents": {
        type: Object,
    },
    "rinfo": {
        type: Object
    },
    created: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Logs_Model', Table, 'logs')