const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        metadata: {
            type: Map,
            required: false,
            default: null,
        },

    },
    {
        timestamps: true,
    },
)

module.exports = mongoose.model('User', userSchema)