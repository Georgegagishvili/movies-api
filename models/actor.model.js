const mongoose = require('mongoose');

const ActorSchema = mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true,
        },
        birthDate: {
            type: Date,
            required: true,
            default: null,
        },
        bio: {
            type: String,
            required: true,
            defualt: null,
        },
        image: {
            type: String,
            required: true,
            default: null,
        }
    },
    {
        timestamps: true,
    }
)

const Actor = mongoose.model('Actor', ActorSchema)
module.exports = Actor