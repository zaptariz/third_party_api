const mongoose = require('mongoose')

const github_response = new mongoose.Schema({
    data: { 
        type: Object 
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

const mode_1 = mongoose.model('github_response',github_response)

exports.mode_1 = mode_1